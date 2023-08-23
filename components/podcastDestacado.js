import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonLg from '@/components/PlayerButtonLg';

export default function PodcastDestacado({ titulo, slug, categoria, descripcionCorta, duracion, link, imagenDestacada, backendUrl, onLoadPlayer }) {
	return(
        <>
                            <article className='col-span-full bg-white rounded-lg p-12 flex drop-shadow-md'>
								<div className='flex basis-1/2'>
									<div className='flex flex-col justify-between me-3'>
										<div>
                                            {typeof categoria != "undefined" &&
                                                <Link href={'/programas/'+categoria.slug}>
                                                    <h3 className='text-light-green font-medium mb-2 font-work'>{categoria.Titulo}</h3>
                                                </Link>
                                            }
											<Link href={'/podcasts/'+slug}>
												<h2 className='font-noto text-2xl mb-3'>{titulo}</h2>
											</Link>
											<div className='my-3 text-lg font-work text-gray-700'>
												<Link href={'/podcasts/'+slug}>{descripcionCorta}</Link>
											</div>
										</div>
										<div className='border-t border-dark-green pt-2 fonttext-lg text-gray-800'>

											<PlayerButtonLg 
												duracion={duracion} 
												onClick={() =>onLoadPlayer(link)} 
											/>
										</div>
									</div>
								</div>
								<div className='basis-1/2'>
								<Link href={'podcasts/'+slug}>
									<Image 
										className='rounded-lg'
										src={backendUrl+imagenDestacada} 
										alt={titulo}
										width={700}
										height={500}
									/>
								</Link>
								</div>
								
							</article>
        </>
    )
}