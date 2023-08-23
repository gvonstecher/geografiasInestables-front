import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonSm from '@/components/PlayerButtonSm';

export default function PodcastCaja({ podcast, backendUrl, onLoadPlayer}) {
    return(
        <>
                            <article className=' bg-white rounded-lg drop-shadow-md'>
								<Link href={'podcasts/'+podcast.attributes.slug}>
									<Image 
										className='object-cover h-60 w-full rounded-t-lg' 
										src={backendUrl+podcast.attributes.ImagenDestacada.data[0].attributes.url}
										width={400}
										height={250} 
										alt={podcast.attributes.Titulo}
									/>
								</Link>
								<div className='flex flex-col justify-between p-3 text-center items-center'>
										<PlayerButtonSm
											duracion={podcast.attributes.Duracion} 
											onClick={() =>onLoadPlayer(podcast.attributes.Link)} 
										/>

										<Link href={'podcasts/'+podcast.attributes.slug}>
											<h2 className='font-medium'>{podcast.attributes.Titulo}</h2>
										</Link>
										<Link href={'programas/'+podcast.attributes.categoria_podcast.data.attributes.slug}>
											<h3 className='mb-2 font-work'>{podcast.attributes.categoria_podcast.data.attributes.Titulo}</h3>
										</Link>
									</div>
									
							</article>
        </>
    )
}