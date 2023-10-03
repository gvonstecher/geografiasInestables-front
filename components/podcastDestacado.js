import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonLg from '@/components/PlayerButtonLg';

export default function PodcastDestacado({ titulo, slug, categoria, descripcionCorta, duracion, link, imagenDestacada, backendUrl, onLoadPlayer }) {
	return(
        <>
                            <article className='col-span-full bg-white p-5 flex rounded-lg md:p-12 flex-col-reverse md:flex-row drop-shadow-md'>
								<div className='flex basis-3/5'>
									<div className='flex flex-col justify-between me-3 w-full'>
										<div>
										{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
                                                <Link href={'/programas/'+categoria.attributes.slug}>
                                                    <h3 className='text-light-green font-medium mb-2 font-work uppercase'>{categoria.attributes.Titulo}</h3>
                                                </Link>
                                            }
											<Link href={'/podcasts/'+slug}>
												<h2 className='font-noto text-2xl mb-3'>{titulo}</h2>
											</Link>
											<div className='my-3 text-lg font-work text-gray-700'>
												<Link href={'/podcasts/'+slug}>{descripcionCorta}</Link>
											</div>
										</div>
										<div className='border-t border-green pt-2 fonttext-lg text-gray-800'>

											<PlayerButtonLg 
												duracion={duracion} 
												onClick={() =>onLoadPlayer(link)} 
											/>
										</div>
									</div>
								</div>
								<div className='basis-2/5'>
								<Link href={'/podcasts/'+slug}>
									{(typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada !=null ) &&
										<Image 
											className='rounded-lg'
											src={backendUrl+imagenDestacada.attributes.url} 
											alt={titulo}
											layout="responsive"
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