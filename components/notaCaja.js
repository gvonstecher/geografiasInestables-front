import Image from 'next/image'
import Link from 'next/link';
import TiempoDeLectura from './TiempoDeLectura';

export default function NotaCaja({ nota, backendUrl }) {
    return(
        <>
            				<article className=' bg-white rounded-lg drop-shadow-md'>
								<Link href={'notas/'+nota.attributes.slug}>
									<Image 
										className='object-cover h-60 w-full rounded-t-lg' 
										src={backendUrl+nota.attributes.ImagenDestacada.data[0].attributes.url}
										width={400}
										height={250} 
										alt={nota.attributes.Titulo}
									/>
								</Link>
								<div className='flex flex-col justify-between p-3'>
									<div>
										<Link href={'secciones/'+nota.attributes.categoria_nota.data.attributes.slug}>
											<h3 className='uppercase text-light-green font-medium mb-2 font-work'>{nota.attributes.categoria_nota.data.attributes.Titulo}</h3>
										</Link>
										<Link href={'notas/'+nota.attributes.slug}>
											<h2 className='font-martel text-xl font-bold'>{nota.attributes.Titulo}</h2>
										</Link>
									</div>
									<div className='pt-4 text-gray-800 text-sm'>
										<TiempoDeLectura cuerpo={nota.attributes.Cuerpo} />
									</div>
								</div>
							</article>
        </>
    )
}