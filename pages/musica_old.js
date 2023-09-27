import Layout from '@/components/Layout';

const backendUrl = process.env.STRAPIBASEURL;

export default function Musica({musica}) {
    return (
        <>
            <Layout>
                <div id='music-playlist'>
                    <h2 class="text-4xl font-medium mb-4">Música</h2>
                    <div  dangerouslySetInnerHTML={{__html: musica.data.attributes.Link}}></div>
                </div>
            </Layout>
        </>
    )
}


export async function getServerSideProps() {
    const data = await fetch(backendUrl+'/api/musica');
    const musica = await data.json();
    return { 
        props: {
            musica:musica
        } 
    }
  }