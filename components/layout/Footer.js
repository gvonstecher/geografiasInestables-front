import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "@/components/layout/ThemeChanger";

const Footer = () => {
    return (
        <footer className="w-full py-2 bg-gradient-to-b from-[#F2F2F2] from-30% to-[#C3C5C4] dark:bg-none dark:bg-black">
            <div className="container text-center mx-auto">
                <a href="#" className="m-0 py-2 inline-block">
                    <span className="sr-only">Geografias Inestables</span>
                    <Image
                        className="h-[70px] w-auto"
                        src="/gi-logo-v2.png"
                        alt="Geografías Inestables"
                        width={160}
                        height={70}
                    />
                </a>
                <div className="flex w-auto justify-center py-2 gap-10">
                    <ThemeChanger />
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="block dark:hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Forward to inbox" clip-path="url(#clip0_768_4849)">
                                <g id="Group">
                                    <path id="Vector" opacity="0.3" d="M26 36H8V16L24 26L40 16V26H36C30.48 26 26 30.48 26 36ZM24 22L8 12H40L24 22Z" fill="black"/>
                                    <path id="Vector_2" d="M40 8H8C5.8 8 4 9.8 4 12V36C4 38.2 5.8 40 8 40H26V36H8V16L24 26L40 16V26H44V12C44 9.8 42.2 8 40 8ZM24 22L8 12H40L24 22ZM38 30L46 38L38 46V40H30V36H38V30Z" fill="black" />
                                </g>
                            </g>
                            <defs><clipPath id="clip0_768_4849"><rect width="48" height="48" fill="white" /></clipPath></defs>
                        </svg>

                        <svg width="48" height="48" viewBox="0 0 48 48" className="hidden dark:block" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M26 36H8V16L24 26L40 16V26H36C30.48 26 26 30.48 26 36ZM24 22L8 12H40L24 22Z" fill="black"/>
                            <path d="M40 8H8C5.8 8 4 9.8 4 12V36C4 38.2 5.8 40 8 40H26V36H8V16L24 26L40 16V26H44V12C44 9.8 42.2 8 40 8ZM24 22L8 12H40L24 22ZM38 30L46 38L38 46V40H30V36H38V30Z" fill="#26A69A"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="block dark:hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Instagram">
                                <path id="Vector" opacity="0.3" d="M32 8H16C11.582 8 8 11.582 8 16V32C8 36.418 11.582 40 16 40H32C36.418 40 40 36.418 40 32V16C40 11.582 36.418 8 32 8ZM24 32C19.582 32 16 28.418 16 24C16 19.582 19.582 16 24 16C28.418 16 32 19.582 32 24C32 28.418 28.418 32 24 32Z" fill="black"/>
                                <path id="Vector_2" d="M32 6H16C10.486 6 6 10.486 6 16V32C6 37.514 10.486 42 16 42H32C37.514 42 42 37.514 42 32V16C42 10.486 37.514 6 32 6ZM38 32C38 35.308 35.308 38 32 38H16C12.692 38 10 35.308 10 32V16C10 12.692 12.692 10 16 10H32C35.308 10 38 12.692 38 16V32Z" fill="black" />
                                <path id="Vector_3" d="M24 14C18.486 14 14 18.486 14 24C14 29.514 18.486 34 24 34C29.514 34 34 29.514 34 24C34 18.486 29.514 14 24 14ZM24 30C20.692 30 18 27.308 18 24C18 20.692 20.692 18 24 18C27.308 18 30 20.692 30 24C30 27.308 27.308 30 24 30ZM34 12C33.4696 12 32.9609 12.2107 32.5858 12.5858C32.2107 12.9609 32 13.4696 32 14C32 14.5304 32.2107 15.0391 32.5858 15.4142C32.9609 15.7893 33.4696 16 34 16C34.5304 16 35.0391 15.7893 35.4142 15.4142C35.7893 15.0391 36 14.5304 36 14C36 13.4696 35.7893 12.9609 35.4142 12.5858C35.0391 12.2107 34.5304 12 34 12Z" fill="black"/>
                            </g>
                        </svg>
                        <svg width="48" height="48" viewBox="0 0 48 48" className="hidden dark:block" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Instagram">
                                <path id="Vector_2" d="M32 6H16C10.486 6 6 10.486 6 16V32C6 37.514 10.486 42 16 42H32C37.514 42 42 37.514 42 32V16C42 10.486 37.514 6 32 6ZM38 32C38 35.308 35.308 38 32 38H16C12.692 38 10 35.308 10 32V16C10 12.692 12.692 10 16 10H32C35.308 10 38 12.692 38 16V32Z" fill="#26A69A" />
                                <path id="Vector_3" d="M24 14C18.486 14 14 18.486 14 24C14 29.514 18.486 34 24 34C29.514 34 34 29.514 34 24C34 18.486 29.514 14 24 14ZM24 30C20.692 30 18 27.308 18 24C18 20.692 20.692 18 24 18C27.308 18 30 20.692 30 24C30 27.308 27.308 30 24 30ZM34 12C33.4696 12 32.9609 12.2107 32.5858 12.5858C32.2107 12.9609 32 13.4696 32 14C32 14.5304 32.2107 15.0391 32.5858 15.4142C32.9609 15.7893 33.4696 16 34 16C34.5304 16 35.0391 15.7893 35.4142 15.4142C35.7893 15.0391 36 14.5304 36 14C36 13.4696 35.7893 12.9609 35.4142 12.5858C35.0391 12.2107 34.5304 12 34 12Z" fill="#26A69A"/>
                            </g>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="block dark:hidden" fill="none">
                            <path opacity="0.3" d="M38 40H10C8.896 40 8 39.104 8 38V10C8 8.896 8.896 8 10 8H38C39.104 8 40 8.896 40 10V38C40 39.104 39.104 40 38 40Z" fill="black"/>
                            <path d="M23.2426 41.9997V30.0777H18.5566V24.6277H23.2426V20.6177C23.2426 15.9697 26.0846 13.4357 30.2326 13.4357C31.6306 13.4317 33.0266 13.5037 34.4166 13.6457V18.5057H31.5606C29.3006 18.5057 28.8606 19.5737 28.8606 21.1497V24.6197H34.2606L33.5586 30.0697H28.8286V41.9997H23.2426Z" fill="black"/>
                            <path d="M38 6H10C7.794 6 6 7.794 6 10V38C6 40.206 7.794 42 10 42H38C40.206 42 42 40.206 42 38V10C42 7.794 40.206 6 38 6ZM10 38V10H38L38.002 38H10Z" fill="black"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="hidden dark:block" fill="none">
                            <path d="M23.2426 41.9997V30.0777H18.5566V24.6277H23.2426V20.6177C23.2426 15.9697 26.0846 13.4357 30.2326 13.4357C31.6306 13.4317 33.0266 13.5037 34.4166 13.6457V18.5057H31.5606C29.3006 18.5057 28.8606 19.5737 28.8606 21.1497V24.6197H34.2606L33.5586 30.0697H28.8286V41.9997H23.2426Z" fill="#26A69A"/>
                            <path d="M38 6H10C7.794 6 6 7.794 6 10V38C6 40.206 7.794 42 10 42H38C40.206 42 42 40.206 42 38V10C42 7.794 40.206 6 38 6ZM10 38V10H38L38.002 38H10Z" fill="#26A69A"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="block dark:hidden" fill="none">
                            <path opacity="0.3" d="M40 12V36C40 38.2 38.2 40 36 40H12C9.78 40 8 38.2 8 36V12C8 9.78 9.78 8 12 8H36C38.2 8 40 9.78 40 12Z" fill="black"/>
                            <path d="M36 40H12C9.79 40 8 38.21 8 36V12C8 9.79 9.79 8 12 8H36C38.21 8 40 9.79 40 12V36C40 38.21 38.21 40 36 40Z" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7023 22.02L33.5483 14H30.9263L25.5183 20.32L21.1043 14H13.4043L21.2863 25.266L13.8123 34H16.4783L22.4803 26.968L27.3963 34H35.0743L26.7023 22.02ZM17.1323 15.976H20.1063L31.3683 32.024H28.3743L17.1323 15.976Z" fill="black"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="hidden dark:block" fill="none">
                            <path d="M36 40H12C9.79 40 8 38.21 8 36V12C8 9.79 9.79 8 12 8H36C38.21 8 40 9.79 40 12V36C40 38.21 38.21 40 36 40Z" stroke="#26A69A" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7023 22.02L33.5483 14H30.9263L25.5183 20.32L21.1043 14H13.4043L21.2863 25.266L13.8123 34H16.4783L22.4803 26.968L27.3963 34H35.0743L26.7023 22.02ZM17.1323 15.976H20.1063L31.3683 32.024H28.3743L17.1323 15.976Z" fill="#26A69A"/>
                        </svg>
                    </a>
                </div>

                <hr className="h-px my-8 bg-light-verde border-0 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]"></hr>
                <p>
                    {" "}
                    © Copyright TitanSol. Todos los derechos reservados |{" "}
                    <Link href="/acerca-de" className="underline">
                        Acerca de Geograsfías Inestables
                    </Link>{" "}
                    |{" "}
                    <Link href="/politicas-de-privacidad" className="underline">
                        Política de privacidad
                    </Link>{" "}
                    |{" "}
                    <Link href="/terminos-y-condiciones" className="underline">
                        Términos y Condiciones
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
