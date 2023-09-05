import Image from 'next/image'
import Link from 'next/link';
import TiempoDeLectura from './TiempoDeLectura';

export default function NotaCaja({ titulo, slug, categoria, cuerpo, imagenDestacada, backendUrl }) {
    return(
        <>
            				<article className=' bg-white rounded-lg drop-shadow-md'>
								<Link href={'/notas/'+slug}>
									<Image 
										className='object-cover h-60 w-full rounded-t-lg' 
										src={backendUrl+imagenDestacada.attributes.url}
										width={400}
										height={250} 
										alt={titulo}
									/>
								</Link>
								<div className='flex flex-col justify-between p-3'>
									<div>
										{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
										
											<Link href={'/secciones/'+categoria.attributes.slug}>
												<h3 className='uppercase text-light-green font-medium mb-2 font-work'>{categoria.attributes.Titulo}</h3>
											</Link>
										}
										<Link href={'/notas/'+slug}>
											<h2 className='font-martel text-xl font-bold'>{titulo}</h2>
										</Link>
									</div>
									<div className='pt-4 text-gray-800 text-sm'>
										<TiempoDeLectura cuerpo={cuerpo} />
									</div>
								</div>
							</article>
        </>
    )
}