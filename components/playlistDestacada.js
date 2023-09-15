import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayerButtonLg from '@/components/PlayerButtonLg';

export default function PlaylistDestacada({ titulo, slug, descripcionCorta, link, imagenDestacada, backendUrl, onLoadPlayer }) {
	return(
        <>
                            <article className='col-span-full bg-white rounded-lg p-12 flex drop-shadow-md'>
								<div className='flex basis-2/3'>
									<div className='flex flex-col justify-between me-3 w-full'>
										<div>
                                        <h3 className='text-light-green font-medium mb-2 font-work uppercase'>musica</h3>
												<h2 className='font-noto text-2xl mb-3'>{titulo}</h2>
											<div className='my-3 text-lg font-work text-gray-700'>
												{descripcionCorta}
											</div>
										</div>
										<div className='border-t border-dark-green pt-2 fonttext-lg text-gray-800'>

											<PlayerButtonLg 
												onClick={() =>onLoadPlayer(link)} 
											/>
										</div>
									</div>
								</div>
								<div className='basis-1/3'>
									{(typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada !=null ) &&
										<Image 
											className='rounded-lg'
											src={backendUrl+imagenDestacada.attributes.url} 
											alt={titulo}
											width={700}
											height={500}
										/>
									}
								</div>
								
							</article>
        </>
    )
}