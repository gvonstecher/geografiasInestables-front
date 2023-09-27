import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/Layout';
import AutorDestacado from '@/components/autorDestacado';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_AUTORS} from '@/graphql/queries';

const client = new ApolloClient({
    uri: process.env.STRAPIGRAPHQLURL,
    cache: new InMemoryCache()
});

const backendUrl = process.env.STRAPIBASEURL;

export default function AcercaDe({acercaDe, autores,backendUrl}) {
    return (
        <>
            <Layout>
                <div className="bg-white rounded-lg px-20 py-12 drop-shadow-md">
                    <h3 className='text-2xl'>Acerca de</h3>
                    <h2 className='text-5xl font-oldStandard mb-4'>Geografías Inestables</h2>
                    <div className='cuerpo border-b border-dark-green pb-5 mb-5 text-xl text-justify'>
                        {acercaDe}
                    </div>
                        {autores.map((autor, i) => {
                            return (
                                <>
                                    <AutorDestacado 
                                        key={i} 
                                        nombre={autor.attributes.Nombre}
                                        slug={autor.attributes.slug}
                                        descripcion={autor.attributes.Descripcion}
                                        foto={autor.attributes.Foto.data.attributes.url}
                                        backendUrl={backendUrl} 
                                    />
                                </>
                                
                            )
                        })}  
                </div>
            </Layout>
        </>
    )
}


export async function getServerSideProps() {
    const data = await fetch(backendUrl+'/api/acerca-de');
    const acercaDe = await data.json();
    
    
    const dataAutores = await client.query({
        query: GET_AUTORS
    });


    return { 
        props: {
            acercaDe : acercaDe.data.attributes.Cuerpo,
            autores: dataAutores.data.autors.data,
            backendUrl: backendUrl
        }
    }
  }