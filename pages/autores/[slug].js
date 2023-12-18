import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_AUTORS_SLUGS, GET_AUTOR_POSTS} from '../../graphql/queries';
import Layout from '@/components/layout/Layout';
import NotaDestacada from '@/components/notas/notaDestacada';
import PodcastDestacado from '@/components/podcast/podcastDestacado';
import AutorDestacado from '@/components/autor/autorDestacado';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Notas({autor,notas, podcasts, backendUrl, onLoadPlayer}) {
    return (
        <>
            <Layout>
                <div className="bg-white rounded-lg px-20 py-12 drop-shadow-md mb-8">
                <AutorDestacado 
                    nombre={autor.attributes.Nombre}
                    slug={autor.attributes.slug}
                    descripcion={autor.attributes.Descripcion}
                    foto={autor.attributes.Foto.data.attributes.url}
                    backendUrl={backendUrl} 
                />
                </div>
                
                <section id="home-notas" className="grid gap-8 font-martel">
                    {notas.map((nota, i) => {
                        return (
                            <NotaDestacada 
                                key={i} 
                                nota={nota} 
								titulo={nota.attributes.Titulo}
								slug={nota.attributes.slug}
								descripcionCorta={nota.attributes.DescripcionCorta}
                                cuerpo={nota.attributes.Cuerpo}
								imagenDestacada={nota.attributes.ImagenDestacada.data}
								backendUrl={backendUrl} 
                            />
                        )
                    })}
                    {podcasts.map((podcast, i) => {
                        return (
                            <PodcastDestacado 
                                key={i} 
                                titulo={podcast.attributes.Titulo}
								slug={podcast.attributes.slug}
								descripcionCorta={podcast.attributes.DescripcionCorta}
								duracion={podcast.attributes.Duracion}
								link={podcast.attributes.Link}
								imagenDestacada={podcast.attributes.ImagenDestacada.data}
								backendUrl={backendUrl} 
								onLoadPlayer={onLoadPlayer} 
                            />
                        )
                    })}
                </section>
            </Layout>
        </>
    )
}

export async function getStaticPaths(){
    const {data} = await client.query({
        query: GET_AUTORS_SLUGS
    });

    const paths = data.autors.data.map((seccion) => {
        return {
            params : { slug: seccion.attributes.slug }
        }
    });

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }){ 
    const {data} = await client.query({
        query: GET_AUTOR_POSTS,
        variables: { slug: params.slug}
    });


    return {
        props: {
            autor: data.autors.data[0],
            notas: data.autors.data[0].attributes.notas.data,
            podcasts: data.autors.data[0].attributes.podcasts.data,
            backendUrl: backendUrl
        },
        revalidate: 60
    }
}