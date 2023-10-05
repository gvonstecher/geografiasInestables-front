import React, {useState} from 'react';
import { Old_Standard_TT, Martel, Work_Sans, Noto_Sans } from 'next/font/google';
import '@/styles/slick.css'
import '@/styles/globals.css'
import PersistentPlayer from '@/components/PersistentPlayer';

const old_Standard = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400','700'],
});

const martel = Martel({
  subsets: ['latin'],
  weight: ['400','600','700'],
});
const work = Work_Sans({
  subsets: ['latin'],
  weight: [ '400', '500','700'],
});
const noto = Noto_Sans({
  subsets: ['latin'],
  weight: [ '500','700'],
});

export default function App({ Component, pageProps}) {
    const [playerSource, setPlayerSource] = useState(null);

    const handleLoadPlayer = (source) => {
      setPlayerSource(source);
    };

  	return (
		<>
			<style jsx global>
				{`
				:root {
					--font-old_standard: ${old_Standard.style.fontFamily};
					--font-martel: ${martel.style.fontFamily};
					--font-work: ${work.style.fontFamily};
					--font-noto: ${noto.style.fontFamily};
				}
				`}
			</style>
				<Component {...pageProps} onLoadPlayer={handleLoadPlayer} />
        <PersistentPlayer src={playerSource} />
		</>
  	)
}


export async function getServerSideProps() { 
    const dataSecciones = await fetch(backendUrl+'/api/categoria-notas');
    const secciones = await dataSecciones.json();

    const dataProgramas = await fetch(backendUrl+'/api/categoria-podcasts');
    const programas = 'sdfsdf';
  
	return {
        props: {
            secciones: secciones,
            programas: programas
        }
    }
  }
