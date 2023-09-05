import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_TAGS_SLUGS, GET_TAG_POSTS} from '../../graphql/queries';
import Layout from '@/components/Layout';
import NotaDestacada from '@/components/notaDestacada';
import PodcastDestacado from '@/components/podcastDestacado';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Notas({titulo,notas, podcasts, backendUrl, onLoadPlayer}) {
    return (
        <>
            <Layout>
            <h2 className='text-4xl font-medium mb-4'>{titulo}</h2>
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
								categoria={podcast.attributes.categoria_nota}
								descripcionCorta={podcast.attributes.DescripcionCorta}
								duracion={podcast.attributes.Duracion}
								link={podcast.attributes.Link}
								imagenDestacada={podcast.attributes.ImagenDestacada.data.attributes.url}
								backendUrl={backendUrl} 
								onLoadPlayer={onLoadPlayer} 
                            />
                        )
                    })}{podcasts.map((podcast, i) => {
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
                    })}
                </section>
            </Layout>
        </>
    )
}

export async function getStaticPaths(){
    const {data} = await client.query({
        query: GET_TAGS_SLUGS
    });

    const paths = data.tags.data.map((seccion) => {
        return {
            params : { slug: seccion.attributes.slug }
        }
    });

    return {
        paths: paths,
        fallback:false
    }
}

export async function getStaticProps({ params }){ 
    const {data} = await client.query({
        query: GET_TAG_POSTS,
        variables: { slug: params.slug}
    });


    return {
        props: {
            Tag: data.tags.data[0].attributes.Tag,
            notas: data.tags.data[0].attributes.notas.data,
            podcasts: data.tags.data[0].attributes.podcasts.data,
            backendUrl: backendUrl
        },
        revalidate: 60
    }
}