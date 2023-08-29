import Image from 'next/image'
import Link from 'next/link';
import TiempoDeLectura from './TiempoDeLectura';

const backendUrl = process.env.STRAPIBASEURL;

export default function NotaDestacada({ titulo, slug, categoria, descripcionCorta, cuerpo, imagenDestacada, backendUrl }) {
	return(
        <>
            <article className='col-span-full bg-white rounded-lg p-12 flex drop-shadow-md'>
				<div className='flex basis-1/2'> 
					<div className='flex flex-col justify-between me-3'>
						<div>
							{(typeof categoria != "undefined" && typeof categoria != null && categoria !=null ) &&
								<Link href={'secciones/'+categoria.slug}>
									<h3 className='uppercase text-light-green font-medium mb-2 font-work'>{categoria.Titulo}</h3>
								</Link>
							}
											<Link href={'notas/'+slug}>
												<h2 className='font-oldStandard text-4xl mb-3'>{titulo}</h2>
											</Link>
											<div className='my-3 text-lg'>
												<Link href={'notas/'+slug}>{descripcionCorta}</Link>
											</div>
										</div>
										<TiempoDeLectura cuerpo={cuerpo} />
									</div>
								</div>
								<div className='basis-1/2'>
								<Link href={'notas/'+slug}>
									<Image 
										src={backendUrl+imagenDestacada} 
										alt={titulo}
										width={700}
										height={500}
										priority
									/>
								</Link>
								</div>
								
							</article>
        </>
    )
}