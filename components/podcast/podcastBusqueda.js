import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonLg from '@/components/player/PlayerButtonLg';

export default function PodcastDestacado({ titulo, slug, categoria, descripcionCorta, duracion, link, imagenDestacada, backendUrl, onLoadPlayer }) {
	return(
        <>
                            <article className='col-span-full bg-white dark:bg-black dark:text-white p-5 flex rounded-lg md:p-12 flex-col-reverse md:flex-row drop-shadow-md'>
								<div className='flex basis-3/5'>
									<div className='flex flex-col justify-between me-3'>
										<div>
										{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
                                                <Link href={'/programas/'+categoria.slug}>
                                                    <h3 className='font-medium text-light-verde-claro mb-2 font-work'>{categoria.Titulo}</h3>
                                                </Link>
                                            }
											<Link href={'/podcasts/'+slug}>
												<h2 className='font-noto text-2xl mb-3'>{titulo}</h2>
											</Link>
											<div className='my-3 text-lg font-work'>
												<Link href={'/podcasts/'+slug}>{descripcionCorta}</Link>
											</div>
										</div>
										<div className='border-t border-dark-verde dark:border-light-light-green pt-2 text-lg text-gray-800'>

											<PlayerButtonLg 
												duracion={duracion} 
												onClick={() =>onLoadPlayer(link)} 
											/>
										</div>
									</div>
								</div>
								<div className='basis-2/5'>
								<Link href={'podcasts/'+slug}>
									{(typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada !=null ) &&
										<Image 
											className='rounded-lg'
											src={backendUrl+imagenDestacada} 
											alt={titulo}
											width={700}
											height={420}
										/>
									}
								</Link>
								</div>
								
							</article>
        </>
    )
}