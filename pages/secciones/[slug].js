import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_SECTION_SLUGS, GET_SECTION_ARTICLES} from '../../graphql/queries';
import Layout from '@/components/Layout';
import NotaDestacada from '@/components/notaDestacada';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Notas({titulo,notas, backendUrl}) {
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
                </section>
            </Layout>
        </>
    )
}

export async function getStaticPaths(){
    const {data} = await client.query({
        query: GET_SECTION_SLUGS
    });

    const paths = data.categoriaNotas.data.map((seccion) => {
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
        query: GET_SECTION_ARTICLES,
        variables: { slug: params.slug}
    });


    return {
        props: {
            titulo: data.categoriaNotas.data[0].attributes.Titulo,
            notas: data.categoriaNotas.data[0].attributes.notas.data,
            backendUrl: backendUrl
        },
        revalidate: 60
    }
}