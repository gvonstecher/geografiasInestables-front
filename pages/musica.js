import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_PLAYLISTS} from '../graphql/queries';
import Layout from '@/components/Layout';
import PlaylistDestacada from '@/components/playlistDestacada';


const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

const backendUrl = process.env.STRAPIBASEURL;

export default function Playlists({playlists, backendUrl,onLoadPlayer}) {
    return (
        <>
            <Layout>
                <section id="home-playlists" className="grid gap-8 font-martel">
                    {playlists.map((playlist, i) => {
                        return (
                            <PlaylistDestacada 
                                key={i} 
                                titulo={playlist.attributes.Titulo}
								slug={playlist.attributes.slug}
								descripcionCorta={playlist.attributes.DescripcionCorta}
								link={playlist.attributes.Link}
								imagenDestacada={playlist.attributes.Imagen.data}
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


export async function getStaticProps({ params }){ 
    const {data} = await client.query({
        query: GET_PLAYLISTS
    });


    return {
        props: {
            playlists: data.playlists.data,
            backendUrl: backendUrl
        },
        revalidate: 60,
    }
}