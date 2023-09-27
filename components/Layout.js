import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'

import React, { useState } from 'react';
import NavMenu from '@/components/NavMenu';

const Layout = ({ children = null }) => {
    const [playerSource, setPlayerSource] = useState('');
    const handleButtonClick = (source) => {
        setPlayerSource(source);
    };

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Geografías Inestables</title>
                <link rel="icon" href="/favicon.ico" />
                <script type="text/javascript" src="/hamburguer.js" async></script>
            </Head>
            <div className="min-h-screen flex flex-col">
                <header className="">
                    <nav className="container relative  mx-auto flex items-center w-full drop-shadow-md z-10 justify-between lg:px-8" aria-label="Global">
                        <div className="">
                            <Link href="/" className="m-0 pt-2 pb-0 inline-block">
                                <span className="sr-only">Geografias Inestables</span>
                                <Image className="h-16 w-auto " src="/gi-logo.png" alt="Geografías Inestables" width={160} height={70} />
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center text-blue-600 p-3">
                                <img src="/menu.svg" className="h-12 w-12" />
                            </button>
                        </div>
                        <ul className="hidden lg:flex text-xl lg:gap-x-12">
                            <li>
                                <NavMenu section="podcasts"/>
                            </li>
                            <li>
                                <NavMenu section="notas"/>
                            </li>
                            <li>
                                <Link href="/musica" className="flex items-center">
                                    <i className="px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_33_288)">
                                            <path opacity="0.3" d="M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z" fill="black"/>
                                            <path d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_33_288">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </i>
                                    Musica
                                </Link>
                            </li>
                            <li>
                                <Link href="/busqueda" className="flex items-center">
                                    <i className="px-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd" />
                                        </svg>
                                    </i>
                                    Buscar
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="navbar-menu relative z-50 hidden">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                        <nav id='mobile-menu' className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                            <div className="flex items-center mb-8">
                                <Link href="/" className="mr-auto pt-2 pb-0 inline-block">
                                    <span className="sr-only">Geografias Inestables</span>
                                    <Image className="h-16 w-auto " src="/gi-logo.png" alt="Geografías Inestables" width={160} height={70} />
                                </Link>
                                <button className="navbar-close">
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <NavMenu section="podcasts"/>
                                    </li>
                                    <li>
                                        <NavMenu section="notas"/>
                                    </li>
                                    <li>
                                        <Link href="/musica" className="flex items-center">
                                            <i className="px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_33_288)">
                                                    <path opacity="0.3" d="M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z" fill="black"/>
                                                    <path d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z" fill="black"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_33_288">
                                                    <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </i>
                                            Musica
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/busqueda" className="flex items-center">
                                            <i className="px-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-5 w-5">
                                                    <path
                                                    fillRule="evenodd"
                                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                    clipRule="evenodd" />
                                                </svg>
                                            </i>
                                            Buscar
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <div className="pt-6">
                                    <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                                    <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
                                </div>
                                <p className="my-4 text-xs text-center text-gray-400">
                                    <span>Copyright © 2021</span>
                                </p>
                            </div>
                        </nav>
                    </div>
                </header>
                <main className="flex-grow container mx-auto">
                    <div className="px-4 py-12">
                        {typeof children === 'function' ? children(openModal) : children}
                    </div>
                </main>

                <footer className='w-full py-2'>
                    <div className='container text-center mx-auto'>
                        <a href="#" className="m-0 py-2 inline-block">
                            <span className="sr-only">Geografias Inestables</span>
                            <Image className="h-16 w-auto " src="/gi-logo.png" alt="Geografías Inestables" width={160} height={70} />
                        </a>
                        <div className='flex w-auto justify-center py-2 gap-10'>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <g filter="url(#filter0_d_293_258)">
                                        <path d="M26.5 0C29.6071 0 32.5268 0.589286 35.2589 1.76786C37.9911 2.94643 40.375 4.55357 42.4107 6.58929C44.4464 8.625 46.0536 11.0089 47.2321 13.7411C48.4107 16.4732 49 19.3929 49 22.5C49 25.6071 48.4107 28.5268 47.2321 31.2589C46.0536 33.9911 44.4464 36.375 42.4107 38.4107C40.375 40.4464 37.9911 42.0536 35.2589 43.2321C32.5268 44.4107 29.6071 45 26.5 45C23.3929 45 20.4732 44.4107 17.7411 43.2321C15.0089 42.0536 12.625 40.4464 10.5893 38.4107C8.55357 36.375 6.94643 33.9911 5.76786 31.2589C4.58929 28.5268 4 25.6071 4 22.5C4 19.3929 4.58929 16.4732 5.76786 13.7411C6.94643 11.0089 8.55357 8.625 10.5893 6.58929C12.625 4.55357 15.0089 2.94643 17.7411 1.76786C20.4732 0.589286 23.3929 0 26.5 0ZM13.8571 28.3393L20.6071 23.5179L13.8571 18.6964V28.3393ZM39.1429 30.4821L30.8929 24.5893L26.5 27.75L22.0536 24.5893L13.8571 30.4821V33.75H39.1429V30.4821ZM39.1429 18.6964L32.3929 23.5179L39.1429 28.3393V18.6964ZM39.1429 11.25H13.8571V14.5179L26.5 23.5179L39.1429 14.5179V11.25Z" fill="black"/>
                                    </g>
                                </svg>
                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <g filter="url(#filter0_d_293_264)">
                                    <path d="M26.4731 0C29.5914 0 32.5125 0.591398 35.2366 1.77419C37.9606 2.95699 40.3441 4.56093 42.3871 6.58602C44.4301 8.61111 46.043 10.9857 47.2258 13.7097C48.4086 16.4337 49 19.3548 49 22.4731C49 25.5914 48.4086 28.5125 47.2258 31.2366C46.043 33.9606 44.4301 36.3441 42.3871 38.3871C40.3441 40.4301 37.9606 42.043 35.2366 43.2258C32.5125 44.4086 29.5914 45 26.4731 45C23.3548 45 20.4337 44.4086 17.7097 43.2258C14.9857 42.043 12.6111 40.4301 10.586 38.3871C8.56093 36.3441 6.95699 33.9606 5.77419 31.2366C4.5914 28.5125 4 25.5914 4 22.4731C4 19.3548 4.5914 16.4337 5.77419 13.7097C6.95699 10.9857 8.56093 8.61111 10.586 6.58602C12.6111 4.56093 14.9857 2.95699 17.7097 1.77419C20.4337 0.591398 23.3548 0 26.4731 0ZM37.6559 17.6344C38.6953 16.8459 39.6093 15.8961 40.3979 14.7849C39.8961 15 39.3853 15.1792 38.8656 15.3226C38.3459 15.466 37.7993 15.5735 37.2258 15.6452C37.7993 15.2867 38.3011 14.8477 38.7312 14.328C39.1613 13.8082 39.466 13.2437 39.6452 12.6344C39.1075 12.9211 38.552 13.181 37.9785 13.414C37.405 13.647 36.8136 13.8172 36.2043 13.9247C35.7025 13.4229 35.1111 13.0108 34.4301 12.6882C33.7491 12.3656 32.9964 12.2043 32.172 12.2043C31.4194 12.2043 30.7115 12.3477 30.0484 12.6344C29.3853 12.9211 28.8118 13.3154 28.328 13.8172C27.8441 14.319 27.4588 14.9014 27.172 15.5645C26.8853 16.2276 26.7419 16.9355 26.7419 17.6882C26.7419 17.9032 26.7509 18.1183 26.7688 18.3333C26.7867 18.5484 26.8136 18.7455 26.8495 18.9247C24.5914 18.8172 22.4946 18.2616 20.5591 17.2581C18.6237 16.2545 16.9749 14.9104 15.6129 13.2258C15.1111 14.0502 14.8602 14.9642 14.8602 15.9677C14.8602 16.8996 15.0842 17.7688 15.5323 18.5753C15.9803 19.3817 16.5627 20.0358 17.2796 20.5376C16.3477 20.466 15.5233 20.233 14.8065 19.8387V19.8925C14.8065 21.2545 15.2276 22.4283 16.0699 23.414C16.9122 24.3996 17.9606 25.0179 19.2151 25.2688C18.9642 25.3405 18.7222 25.3943 18.4892 25.4301C18.2563 25.466 18.0143 25.4839 17.7634 25.4839C17.5842 25.4839 17.414 25.4749 17.2527 25.457C17.0914 25.4391 16.9211 25.4122 16.7419 25.3763C17.1004 26.4516 17.7366 27.3477 18.6505 28.0645C19.5645 28.7814 20.6308 29.1398 21.8495 29.1398C20.9176 29.8925 19.8692 30.4749 18.7043 30.8871C17.5394 31.2993 16.3297 31.5054 15.0753 31.5054C14.8244 31.5054 14.5914 31.4964 14.3763 31.4785C14.1613 31.4606 13.9462 31.4337 13.7312 31.3979C14.9498 32.1864 16.267 32.7957 17.6828 33.2258C19.0986 33.6559 20.5771 33.871 22.1183 33.871C24.6272 33.871 26.8495 33.3961 28.7849 32.4462C30.7204 31.4964 32.3423 30.2778 33.6505 28.7903C34.9588 27.3029 35.9534 25.6362 36.6344 23.7903C37.3154 21.9444 37.6559 20.1254 37.6559 18.3333V17.6344Z" fill="black"/>
                                    </g>
                                </svg>
                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <g filter="url(#filter0_d_293_260)">
                                        <path d="M26.4732 0C29.584 0 32.5072 0.589988 35.2426 1.76996C37.978 2.94994 40.3647 4.559 42.4029 6.59714C44.441 8.63528 46.0501 11.0131 47.23 13.7306C48.41 16.4482 49 19.3623 49 22.4732C49 25.584 48.41 28.5072 47.23 31.2426C46.0501 33.978 44.441 36.3647 42.4029 38.4029C40.3647 40.441 37.978 42.0501 35.2426 43.23C32.5072 44.41 29.584 45 26.4732 45C23.3623 45 20.4482 44.41 17.7306 43.23C15.0131 42.0501 12.6353 40.441 10.5971 38.4029C8.559 36.3647 6.94994 33.978 5.76996 31.2426C4.58999 28.5072 4 25.584 4 22.4732C4 19.3623 4.58999 16.4482 5.76996 13.7306C6.94994 11.0131 8.559 8.63528 10.5971 6.59714C12.6353 4.559 15.0131 2.94994 17.7306 1.76996C20.4482 0.589988 23.3623 0 26.4732 0ZM34.9476 9.81526H30.174C29.2443 9.81526 28.3862 9.97616 27.5995 10.298C26.8129 10.6198 26.1246 11.0489 25.5346 11.5852C24.9446 12.1216 24.4887 12.7294 24.1669 13.4088C23.8451 14.0882 23.6841 14.7676 23.6841 15.447V18.2896H19.447V23.8677H23.6841V35.1311H29.3159V23.8677H33.4994V18.2896H29.3159V16.8415C29.3159 16.4124 29.4857 16.0727 29.8254 15.8224C30.1651 15.5721 30.4601 15.447 30.7104 15.447H34.9476V9.81526Z" fill="black"/>
                                    </g>
                                </svg>
                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <g filter="url(#filter0_d_293_262)">
                                    <path d="M26.2581 27.4731C25.5771 27.4731 24.9409 27.3477 24.3495 27.0968C23.7581 26.8459 23.2384 26.4964 22.7903 26.0484C22.3423 25.6004 21.9928 25.0717 21.7419 24.4624C21.491 23.853 21.3656 23.2079 21.3656 22.5269C21.3656 21.8459 21.491 21.2097 21.7419 20.6183C21.9928 20.0269 22.3423 19.5072 22.7903 19.0591C23.2384 18.6111 23.7581 18.2616 24.3495 18.0108C24.9409 17.7599 25.5771 17.6344 26.2581 17.6344C27.6201 17.6344 28.776 18.1093 29.7258 19.0591C30.6756 20.009 31.1505 21.1649 31.1505 22.5269C31.1505 23.2079 31.0251 23.853 30.7742 24.4624C30.5233 25.0717 30.1738 25.6004 29.7258 26.0484C29.2778 26.4964 28.7581 26.8459 28.1667 27.0968C27.5753 27.3477 26.9391 27.4731 26.2581 27.4731ZM34.1075 22.5269C34.1075 22.2043 34.0896 21.8728 34.0538 21.5323C34.0179 21.1918 33.9642 20.8781 33.8925 20.5914H36.0968V31.3979C36.0968 31.6846 36.0072 31.9176 35.828 32.0968C35.6487 32.276 35.4158 32.3656 35.129 32.3656H17.3871C17.1004 32.3656 16.8674 32.276 16.6882 32.0968C16.509 31.9176 16.4194 31.6846 16.4194 31.3979V20.5914H18.6237C18.552 20.8781 18.4982 21.1918 18.4624 21.5323C18.4265 21.8728 18.4086 22.2043 18.4086 22.5269C18.4086 23.6022 18.6147 24.6237 19.0269 25.5914C19.4391 26.5591 19.9946 27.4014 20.6935 28.1183C21.3925 28.8351 22.2258 29.3996 23.1935 29.8118C24.1613 30.224 25.1828 30.4301 26.2581 30.4301C27.3333 30.4301 28.3548 30.224 29.3226 29.8118C30.2903 29.3996 31.1237 28.8351 31.8226 28.1183C32.5215 27.4014 33.0771 26.5591 33.4892 25.5914C33.9014 24.6237 34.1075 23.6022 34.1075 22.5269ZM26.4731 0C29.5914 0 32.5125 0.591398 35.2366 1.77419C37.9606 2.95699 40.3441 4.56093 42.3871 6.58602C44.4301 8.61111 46.043 10.9857 47.2258 13.7097C48.4086 16.4337 49 19.3548 49 22.4731C49 25.5914 48.4086 28.5125 47.2258 31.2366C46.043 33.9606 44.4301 36.3441 42.3871 38.3871C40.3441 40.4301 37.9606 42.043 35.2366 43.2258C32.5125 44.4086 29.5914 45 26.4731 45C23.3548 45 20.4337 44.4086 17.7097 43.2258C14.9857 42.043 12.6111 40.4301 10.586 38.3871C8.56093 36.3441 6.95699 33.9606 5.77419 31.2366C4.5914 28.5125 4 25.5914 4 22.4731C4 19.3548 4.5914 16.4337 5.77419 13.7097C6.95699 10.9857 8.56093 8.61111 10.586 6.58602C12.6111 4.56093 14.9857 2.95699 17.7097 1.77419C20.4337 0.591398 23.3548 0 26.4731 0ZM39.0538 12.6882C39.0538 11.8638 38.767 11.1649 38.1936 10.5914C37.6201 10.0179 36.9211 9.73118 36.0968 9.73118H16.4194C15.595 9.73118 14.8961 10.0179 14.3226 10.5914C13.7491 11.1649 13.4624 11.8638 13.4624 12.6882V32.3656C13.4624 33.19 13.7491 33.8889 14.3226 34.4624C14.8961 35.0358 15.595 35.3226 16.4194 35.3226H36.0968C36.9211 35.3226 37.6201 35.0358 38.1936 34.4624C38.767 33.8889 39.0538 33.19 39.0538 32.3656V12.6882ZM35.129 12.6882C35.4158 12.6882 35.6487 12.7867 35.828 12.9839C36.0072 13.181 36.0968 13.4229 36.0968 13.7097V16.6667C36.0968 16.9534 36.0072 17.1864 35.828 17.3656C35.6487 17.5448 35.4158 17.6344 35.129 17.6344H32.172C31.8853 17.6344 31.6434 17.5448 31.4462 17.3656C31.2491 17.1864 31.1505 16.9534 31.1505 16.6667V13.7097C31.1505 13.4229 31.2491 13.181 31.4462 12.9839C31.6434 12.7867 31.8853 12.6882 32.172 12.6882H35.129Z" fill="black"/>
                                    </g>
                                </svg>
                            </a>
                        </div>

                        <hr className="h-px my-8 bg-dark-green border-0 drop-shadow"></hr>
                        <p>                                                      © Copyright TitanSol. Todos los derechos reservados | <Link href="/acerca-de" className='underline'>Acerca de Geograsfías Inestables</Link> | <Link href="/politicas-de-privacidad" className='underline'>Política de privacidad</Link> | <Link href="/terminos-y-condiciones" className='underline'>Términos y Condiciones</Link></p>
                    </div>
                </footer>
            </div>
            
        </>
    );
}

export default Layout;