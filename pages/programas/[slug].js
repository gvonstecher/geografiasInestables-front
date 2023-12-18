import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_PROGRAMS_SLUGS, GET_PROGRAM_PODCASTS} from '../../graphql/queries';
import Layout from '@/components/layout/Layout';
import PodcastDestacado from '@/components/podcast/podcastDestacado';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Notas({titulo,podcasts, backendUrl,onLoadPlayer}) {
    return (
        <>
            <Layout>
                <section id="home-podcasts" className="grid gap-8 font-martel">
                    {podcasts.map((podcast, i) => {
                        return (
                            <PodcastDestacado 
                                key={i} 
                                titulo={podcast.attributes.Titulo}
								slug={podcast.attributes.slug}
								descripcionCorta={podcast.attributes.DescripcionCorta}
                                categoria={podcast.attributes.categoria_podcast.data}
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
        query: GET_PROGRAMS_SLUGS
    });

    const paths = data.categoriaPodcasts.data.map((seccion) => {
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
        query: GET_PROGRAM_PODCASTS,
        variables: { slug: params.slug}
    });


    return {
        props: {
            podcasts: data.categoriaPodcasts.data[0].attributes.podcasts.data,
            backendUrl: backendUrl
        },
        revalidate: 60,
    }
}