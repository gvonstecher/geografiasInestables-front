import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { MeiliSearch } from 'meilisearch';
import React from 'react'

import Layout from '@/components/Layout';
import NotaDestacada from '@/components/notaDestacada';
import PodcastDestacado from '@/components/podcastDestacado';
import AutorDestacado from '@/components/autorDestacado';

const backendUrl = process.env.STRAPIBASEURL;

export default function Search({backendUrl, onLoadPlayer}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [results, setResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = async () => {
    const client = new MeiliSearch({ 
        host: process.env.MEILISEARCHURL
    }); // Cambia la URL según tu configuración de MeiliSearch

	let searches = {};

	if(filter === 'all'){
		searches = { queries: [
			{
			  indexUid: 'nota',
			  q: query,
			  showRankingScore: true
			},
			{
			  indexUid: 'podcast',
			  q: query,
			  showRankingScore: true
			},
			{
			  indexUid: 'autor',
			  q: query,
			  showRankingScore: true
			},
		]};	
	} else if (filter === 'notas'){
		searches = { queries: [
			{
			  indexUid: 'nota',
			  q: query,
			  showRankingScore: true
			}
		]};	
	} else if (filter === 'podcasts'){
		searches = { queries: [
			{
				indexUid: 'podcast',
				q: query,
				showRankingScore: true
			  }
		]};	
	} else if (filter === 'autores'){
		searches = { queries: [
			{
				indexUid: 'autor',
				q: query,
				showRankingScore: true
			}
		]};	
	}

    try {
      const searchResults = await client.multiSearch(searches);

      // Combina los arrays de hits en uno solo
      const combinedHits = searchResults.results.flatMap(result =>
        result.hits.map(hit => ({ ...hit, indexUid: result.indexUid }))
      );

      combinedHits.sort((a, b) => b._rankingScore - a._rankingScore);
      setResults(combinedHits);

    } catch (error) {
      console.error('Error searching:', error);
    }

  };

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout); // Cancela el temporizador anterior
    }
    if (query && filter) {
		
      const newSearchTimeout = setTimeout(() => {
        handleSearch(); // Realiza la búsqueda después de un segundo de inactividad
      }, 1000); // Cambia el tiempo de retraso según lo que prefieras

      setSearchTimeout(newSearchTimeout); // Almacena el nuevo temporizador en el estado
    } else {
      setResults([]); // Si no hay consulta, limpia los resultados
    }
  }, [query, filter]);


  return (
    <Layout>
      	<section id='search' className='grid grid-cols-3 gap-8 font-martel'>
			<div className='col-span-3 bg-white rounded-lg p-12 flex drop-shadow-md items-stretch font-work'>
				<input
					type="text"
					className='grow '
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Buscar..."
				/>
				<select 
					className='ms-4 pr-10' 
					onChange={(e) => setFilter(e.target.value)}
					value="all"
					>
						<option value="all">Todos</option>
						<option value="notas">Notas</option>
						<option value="podcasts">Podcasts</option>
						<option value="autores">Autores</option>
				</select> 
				<button className='ms-4 bg-dark-green text-white px-4 font-bold'>
					<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path></svg></i>
				</button>
			</div>
          {results.map((result) => {
            switch (result.indexUid) {
              case 'nota':
                return (
                  <NotaDestacada 
                    titulo={result.Titulo}
                    slug={result.Slug}
                    categoria={result.categoria_nota}
                    descripcionCorta={result.DescripcionCorta}
                    imagenDestacada={result.ImagenDestacada[0].url}
					backendUrl={backendUrl}
					key={result._meilisearch_id}
                  />
                )
              case 'podcast':
                  return (
                    <PodcastDestacado 
                      titulo={result.Titulo}
                      slug={result.slug}
                      categoria={result.categoria_nota}
                      descripcionCorta={result.DescripcionCorta}
					  cuerpo={result.Cuerpo}
                      imagenDestacada={result.ImagenDestacada[0].url}
                      duracion={result.duracion}
                      link={result.Link}
                      backendUrl={backendUrl}
					  onLoadPlayer={onLoadPlayer}
					  key={result._meilisearch_id}
                    />
                  )
              default: 
                  return (
					<div className='col-span-3 bg-white rounded-lg p-12 flex drop-shadow-md' key={result._meilisearch_id}>
						<AutorDestacado 
							key={result._meilisearch_id} 
							nombre={result.Nombre}
							slug={result.slug}
							descripcion={result.Descripcion}
							foto={result.Foto[0].url}
							backendUrl={backendUrl} />
					</div>
                    
                  )
            }
          })}
            
      	</section>
    </Layout>
  );
};


export async function getStaticProps(){ 
  return{
    props: {
			backendUrl
    }
  }
}
