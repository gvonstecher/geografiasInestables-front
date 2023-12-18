import Layout from '@/components/layout/Layout';

import { getApolloClient } from '@/lib/apollo-client';
import { GET_HOME_POSTS } from '../graphql/queries';

import NotaDestacada from '@/components/notas/notaDestacada';
import NotaCaja from '@/components/notas/notaCaja';
import PodcastDestacado from '@/components/podcast/podcastDestacado';
import PodcastCaja from '@/components/podcast/podcastCaja';
import Slider from "react-slick";

const apiUrl = process.env.STRAPIGRAPHQLURL;
const backendUrl = process.env.STRAPIBASEURL;

export default function Home({notas,podcasts,backendUrl, onLoadPlayer}) {

	const settingsSlideNotas = {
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots:true
			}
		  }
		]
	};

	const settingsSlidePodcasts = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots:true
			}
		  }
		]
	};


  return (
    <>
    	<Layout>
        	<section id="home-notas" className="font-martel">
						<NotaDestacada 
							titulo={notas[0].attributes.Titulo}
							slug={notas[0].attributes.slug}
							categoria={notas[0].attributes.categoria_nota.data}
							descripcionCorta={notas[0].attributes.DescripcionCorta}
							cuerpo={notas[0].attributes.Cuerpo}
							imagenDestacada={notas[0].attributes.ImagenDestacada.data}
							backendUrl={backendUrl} 
						/>
						<div className='w-full py-8'>
							<Slider {...settingsSlideNotas}>
									{notas.slice(1).map((nota, i) => {
											return (
												<NotaCaja 
													key={i} 
													titulo={nota.attributes.Titulo}
													slug={nota.attributes.slug}
													categoria={nota.attributes.categoria_nota.data}
													cuerpo={nota.attributes.Cuerpo}
													imagenDestacada={nota.attributes.ImagenDestacada.data}
													backendUrl={backendUrl} />
											)
									})}
							</Slider>
						</div>
        	</section>

			<section id="home-podcasts" className="font-work mt-10">
				<PodcastDestacado
								titulo={podcasts[0].attributes.Titulo}
								slug={podcasts[0].attributes.slug}
								categoria={podcasts[0].attributes.categoria_podcast.data}
								descripcionCorta={podcasts[0].attributes.DescripcionCorta}
								duracion={podcasts[0].attributes.Duracion}
								link={podcasts[0].attributes.Link}
								imagenDestacada={podcasts[0].attributes.ImagenDestacada.data}
								backendUrl={backendUrl} 
								onLoadPlayer={onLoadPlayer}
							/>
				<div className='w-full py-8'>
					<Slider {...settingsSlidePodcasts}>
						{podcasts.slice(1).map((podcast, i) => {
							return (
								<PodcastCaja 
									key={i} 
									podcast={podcast} 
									titulo={podcast.attributes.Titulo}
									slug={podcast.attributes.slug}
									categoria={podcast.attributes.categoria_podcast.data}
									descripcionCorta={podcast.attributes.DescripcionCorta}
									duracion={podcast.attributes.Duracion}
									link={podcast.attributes.Link}
									imagenDestacada={podcast.attributes.ImagenDestacada.data}
									backendUrl={backendUrl} 
									onLoadPlayer={onLoadPlayer}
								/>
							)
						}
					)}
					</Slider>
				</div>
        	</section>
		</Layout>
    </>
  )
}


export async function getStaticProps(){ 
	const client = getApolloClient(process.env.STRAPIGRAPHQLURL);

  const { data } = await client.query({
    query: GET_HOME_POSTS
  });


  return{
    props: {
      notas: data.notas.data,
      podcasts: data.podcasts.data,
			backendUrl: backendUrl
    },
	revalidate:60
  }
}