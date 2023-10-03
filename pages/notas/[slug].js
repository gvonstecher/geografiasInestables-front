import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { getApolloClient } from '@/lib/apollo-client';
import { GET_ARTICLE_SLUGS, GET_ARTICLE} from '../../graphql/queries';
import Layout from '@/components/Layout';
import Date from '@/components/Date';
import ShareButton from '@/components/ShareButton';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Nota({nota, backendUrl}) {

    
  return (
    <>
        <Layout>
            <article className=" bg-white rounded-lg p-5 md:px-20 md:py-12 drop-shadow-md">
                {nota.categoria_nota.data != null ??
                    <Link href={'/secciones/'+nota.categoria_nota.data.attributes.slug}>
					    <h3 className='uppercase text-light-green font-medium mb-2 font-work'>{nota.categoria_nota.data.attributes.Titulo}</h3>
				    </Link>
                }
                <h2 className='font-oldStandard text-4xl mb-2'>{nota.Titulo}</h2>
                <h4 className='mb-1'> <Date dateString={nota.updatedAt} /></h4>
                <h5>
                    <Image
                        className='inline rounded-full me-2 object-cover w-6 h-6'
                        src={backendUrl+nota.autor.data.attributes.Foto.data.attributes.url} 
                        alt={nota.autor.data.attributes.Nombre}
                        width={36}
                        height={36}
				    />
                    {nota.autor.data.attributes.Nombre}
                </h5>

                <div className='mx-auto mt-5 w-auto text-center'>
                    <Image
                        className='mx-auto'
                        src={backendUrl+nota.ImagenDestacada.data.attributes.url} 
                        alt={nota.Titulo}
                        width={(nota.ImagenDestacada.data.attributes.width) ? nota.ImagenDestacada.data.attributes.width : '1200'}
                        height={(nota.ImagenDestacada.data.attributes.height) ? nota.ImagenDestacada.data.attributes.height : '500'}
                    />
                    <span className='text-sm'>{nota.ImagenDestacada.data.attributes.caption}</span>
                </div>

                <div className='content my-6 font-martel text-lg leading-10 text-justify'
                    dangerouslySetInnerHTML={{ __html: nota.Cuerpo }}
                >
                </div>

                <div id='metaData' className='border-b border-light-green flex justify-between py-1'>
                    <div className='font-oldStandard text-2xl '>
                        <b>Etiquetas</b>:
                        {nota.tags.data.map((val, i) => {
                            return (
                                <Link
                                    className='ps-2 hover:text-dark-green'
                                    key={i} 
                                    href={'/etiqueta/'+val.attributes.slug}
                                    >
                                    {val.attributes.Tag}
                                </Link>
                            )
                        })}
                    </div>
                    <ShareButton titulo={nota.Titulo}/>
                </div>
            </article>
           
        </Layout>
    </>
  )
}


export async function getStaticPaths(){
    const {data} = await client.query({
        query: GET_ARTICLE_SLUGS
    });

    const paths = data.notas.data.map((nota) => {
        return {
            params : { slug: nota.attributes.slug }
        }
    });

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }){ 
    const {data} = await client.query({
        query: GET_ARTICLE,
        variables: { slug: params.slug}
    });


    return {
        props: {
            nota: data.notas.data[0].attributes,
            backendUrl: backendUrl
        },
        revalidate: 60,
    }
}