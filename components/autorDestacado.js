import Image from 'next/image'
import Link from 'next/link';


export default function autorDestacado({ nombre,slug,descripcion,foto, backendUrl }) {
    return(
        <>
            				<article className='flex py-6 border-b border-dark-green grow' >
                                        <div className='basis-1/3 text-center'>
                                            <Link href={'/autores/'+slug}>
                                                <Image 
                                                    className='inline rounded-full me-2 object-cover w-40 h-40'
                                                    src={backendUrl+foto} 
                                                    alt={nombre}
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                        <div className='basis-2/3'>
                                            <Link href={'/autores/'+slug}>
                                                <h3 className='text-3xl font-oldStandard font-medium'>{nombre}</h3>
                                            </Link>
                                            <div className='text-lg'>
                                                <Link href={'/autores/'+slug}>
                                                    {descripcion}
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
        </>
    )
}