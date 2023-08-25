import Layout from '@/components/Layout';

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_HOME_POSTS } from '../graphql/queries';

import NotaDestacada from '@/components/notaDestacada';
import NotaCaja from '@/components/notaCaja';
import PodcastDestacado from '@/components/podcastDestacado';
import PodcastCaja from '@/components/podcastCaja';

const apiUrl = process.env.STRAPIGRAPHQLURL;
const backendUrl = process.env.STRAPIBASEURL;


export default function Home({notas,podcasts,backendUrl,onLoadPlayer}) {
  return (
    <>
    	<Layout>
        	<section id="home-notas" className="grid grid-cols-3 gap-8 font-martel">
				{notas.map((nota, i) => {
					if(i===0){
						return (
							<NotaDestacada 
								key={i} 
								titulo={nota.attributes.Titulo}
								slug={nota.attributes.slug}
								categoria={nota.attributes.categoria_nota}
								descripcionCorta={nota.attributes.DescripcionCorta}
								cuerpo={nota.attributes.Cuerpo}
								imagenDestacada={nota.attributes.ImagenDestacada.data.attributes.url}
								backendUrl={backendUrl} 
							/>
						)
					} else {
						return (
							<NotaCaja key={i} nota={nota} backendUrl={backendUrl} />
						)
					}
				})}
        	</section>

			<section id="home-podcasts" className="grid grid-cols-4 gap-8 font-work mt-10">
				{podcasts.map((podcast, i) => {
					if(i===0){
						return (
							<PodcastDestacado
								key={i} 
								titulo={podcast.attributes.Titulo}
								slug={podcast.attributes.slug}
								categoria={podcast.attributes.categoria_nota}
								descripcionCorta={podcast.attributes.DescripcionCorta}
								duracion={podcast.attributes.Duracion}
								link={podcast.attributes.Link}
								imagenDestacada={podcast.attributes.ImagenDestacada.data.attributes.url}
								backendUrl={backendUrl} 
								onLoadPlayer={onLoadPlayer}
							/>
						)
					} else {
						return (
							<PodcastCaja key={i} podcast={podcast} backendUrl={backendUrl} onLoadPlayer={onLoadPlayer}/>
						)
					}
				})}
        	</section>
		</Layout>
    </>
  )
}


export async function getServerSideProps(){ 
  const client = new ApolloClient({
    uri: apiUrl,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_HOME_POSTS
  });


  return{
    props: {
      notas: data.notas.data,
      podcasts: data.podcasts.data,
			backendUrl: backendUrl
    }
  }
}