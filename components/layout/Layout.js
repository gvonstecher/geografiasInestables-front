import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'

import React, { useState } from 'react';
import NavBar from '@/components/layout/navBar';
import Footer from '@/components/layout/Footer';

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
            </Head>
            <div className="min-h-screen flex flex-col">
                <header className=" dark:bg-black bg-light-gris dark:text-light-green shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
                    <NavBar />
                </header>
                <main className="flex-grow container mx-auto">
                    <div className="px-4 py-12">
                        {typeof children === 'function' ? children(openModal) : children}
                    </div>
                </main>

                <Footer />
            </div>
            
        </>
    );
}

export default Layout;