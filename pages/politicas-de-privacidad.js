import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/Layout';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_AUTORS} from '@/graphql/queries';

const client = new ApolloClient({
    uri: process.env.STRAPIGRAPHQLURL,
    cache: new InMemoryCache()
});

const backendUrl = process.env.STRAPIBASEURL;

export default function Politicas({titulo, cuerpo}) {
    return (
        <>
            <Layout>
                <div className="bg-white rounded-lg px-20 py-12 drop-shadow-md">
                    <h2 className='text-4xl font-oldStandard pb-4 mb-4 border-b border-dark-green'>{titulo}</h2>
                    <div className='cuerpo pb-5 mb-5 text-lg text-justify'>
                        {cuerpo}
                    </div>
                </div>
            </Layout>
        </>
    )
}


export async function getServerSideProps() {
    const data = await fetch(backendUrl+'/api/politicas-de-privacidad');
    const contenido = await data.json();
    return { 
        props: {
            titulo:contenido.data.attributes.Titulo,
            cuerpo:contenido.data.attributes.Cuerpo
        } 
    }
  }