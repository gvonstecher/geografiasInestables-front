import Image from 'next/image'
import Link from 'next/link';
import TiempoDeLectura from './TiempoDeLectura';

const backendUrl = process.env.STRAPIBASEURL;

export default function NotaDestacada({ titulo, slug, categoria, descripcionCorta, cuerpo, imagenDestacada, backendUrl }) {
	return(
        <>
            <article className='col-span-full bg-white rounded-lg p-12 pl-20 flex drop-shadow-md'>
				<div className='flex basis-3/5'> 
					<div className='flex flex-col justify-between me-3'>
						<div>
											{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
												<Link href={'/secciones/'+categoria.attributes.slug}>
													<h3 className='uppercase text-light-green font-medium mb-2 font-work'>{categoria.attributes.Titulo}</h3>
												</Link>
											}
											<Link href={'/notas/'+slug}>
												<h2 className='font-oldStandard text-4xl mb-3'>{titulo}</h2>
											</Link>
											<div className='my-3 text-lg'>
												<Link href={'/notas/'+slug}>{descripcionCorta}</Link>
											</div>
										</div>
										<TiempoDeLectura cuerpo={cuerpo} />
									</div>
								</div>
								<div className='basis-2/5'>
								{(typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada !=null ) &&
									<Link href={'/notas/'+slug}>
										<Image 
											src={backendUrl+imagenDestacada.attributes.url} 
											alt={titulo}
											layout="responsive"
											width={700}
											height={420}
											priority
										/>
									</Link>
								}
								</div>
								
							</article>
        </>
    )
}