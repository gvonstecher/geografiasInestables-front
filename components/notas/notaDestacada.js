import Image from "next/image";
import Link from "next/link";
import TiempoDeLectura from "../card/TiempoDeLectura";

const backendUrl = process.env.STRAPIBASEURL;

export default function NotaDestacada({
    titulo,
    slug,
    categoria,
    descripcionCorta,
    cuerpo,
    imagenDestacada,
    backendUrl,
}) {
    return (
        <>
            <article className="col-span-full bg-white dark:bg-black dark:text-white rounded-lg p-5 flex drop-shadow-md flex-col-reverse md:flex-row md:p-12 md:pl-16 ">
                <div className="flex basis-3/5 mt-4 md:mt-0">
                    <div className="flex flex-col grow justify-between me-10">
                        <div>
                            {typeof categoria != "undefined" &&
                                typeof categoria != null &&
                                categoria != null && (
                                    <Link
                                        href={
                                            "/secciones/" +
                                            categoria.attributes.slug
                                        }
                                    >
                                        <h3 className="uppercase text-light-verde-claro font-medium mb-2 font-work">
                                            {categoria.attributes.Titulo}
                                        </h3>
                                    </Link>
                                )}
                            <Link href={"/notas/" + slug}>
                                <h2 className="font-oldStandard text-4xl mb-3">
                                    {titulo}
                                </h2>
                            </Link>
                            <div className="my-3 text-lg">
                                <Link href={"/notas/" + slug}>
                                    {descripcionCorta}
                                </Link>
                            </div>
                        </div>
						<div className="border-t border-light-verde-claro dark:border-light-green">
							<TiempoDeLectura cuerpo={cuerpo} />
						</div>
                    </div>
                </div>
                <div className="basis-2/5">
                    {typeof imagenDestacada != "undefined" &&
                        typeof imagenDestacada != null &&
                        imagenDestacada != null && (
                            <Link href={"/notas/" + slug}>
                                <Image
                                    src={
                                        backendUrl +
                                        imagenDestacada.attributes.url
                                    }
                                    alt={titulo}
                                    className="rounded-md"
                                    width={700}
                                    height={420}
                                    priority
                                />
                            </Link>
                        )}
                </div>
            </article>
        </>
    );
}
