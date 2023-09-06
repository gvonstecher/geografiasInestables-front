import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonSm from '@/components/PlayerButtonSm';

export default function PodcastCaja({ titulo, slug, categoria, duracion, link, imagenDestacada, backendUrl, onLoadPlayer}) {
	return(
        <>
                            <article className=' bg-white rounded-lg drop-shadow-md'>
								<Link href={'/podcasts/'+slug}>
									{(typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada !=null ) &&
										<Image 
											className='object-cover h-60 w-full rounded-t-lg' 
											src={backendUrl+imagenDestacada.attributes.url}
											width={400}
											height={250} 
											alt={titulo}
										/>
									}
								</Link>
								<div className='flex flex-col justify-between p-3 text-center items-center'>
										<PlayerButtonSm
											duracion={duracion} 
											onClick={() =>onLoadPlayer(link)} 
										/>

										<Link href={'/podcasts/'+slug}>
											<h2 className='font-medium'>{titulo}</h2>
										</Link>
										{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
												<Link href={'/programas/'+categoria.attributes.slug}>
													<h3 className='text-light-green font-medium mb-2 font-work'>{categoria.attributes.Titulo}</h3>
												</Link>
                                        }
									</div>
									
							</article>
        </>
    )
}