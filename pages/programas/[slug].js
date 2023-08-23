import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_PROGRAMS_SLUGS, GET_PROGRAM_PODCASTS} from '../../graphql/queries';
import Layout from '@/components/Layout';
import PodcastDestacado from '@/components/podcastDestacado';


const client = new ApolloClient({
    uri: process.env.STRAPIGRAPHQLURL,
    cache: new InMemoryCache()
});

const backendUrl = process.env.STRAPIBASEURL;

export default function Notas({titulo,podcasts, backendUrl,onLoadPlayer}) {
    return (
        <>
            <Layout>
            <h2 className='text-4xl font-medium mb-4'>{titulo}</h2>
                <section id="home-podcasts" className="grid gap-8 font-martel">
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
								imagenDestacada={podcast.attributes.ImagenDestacada.data[0].attributes.url}
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
        query: GET_PROGRAMS_SLUGS
    });

    const paths = data.categoriaPodcasts.data.map((seccion) => {
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
        query: GET_PROGRAM_PODCASTS,
        variables: { slug: params.slug}
    });


    return {
        props: {
            titulo: data.categoriaPodcasts.data[0].attributes.Titulo,
            podcasts: data.categoriaPodcasts.data[0].attributes.podcasts.data,
            backendUrl: backendUrl
        }
    }
}