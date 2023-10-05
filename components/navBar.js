import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";

const NavBar = () => {
  const [hambMenuOpen, setHambMenuOpen] = useState(false);
  const [subNotasOpen, setSubNotasOpen] = useState(false);
  const [subNotasMobileOpen, setSubNotasMobileOpen] = useState(false);
  const [subNotasLinks, setSubNotasLinks] = useState([]);
  const [subPodcastsOpen, setSubPodcastsOpen] = useState(false);
  const [subPodcastsMobileOpen, setSubPodcastsMobileOpen] = useState(false);
  const [subPodcastsLinks, setSubPodcastsLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleNav = () => {
    setHambMenuOpen(!hambMenuOpen);
  };
  const handleSubNotas = () => {
    setSubNotasOpen(!subNotasOpen);
	if(subPodcastsOpen){
		setSubPodcastsOpen(!subPodcastsOpen);
	}
  };
  const handleSubPodcasts = () => {
    setSubPodcastsOpen(!subPodcastsOpen);
	if(subNotasOpen){
		setSubNotasOpen(!subNotasOpen);
	}
  };
  const handleSubNotasMobile = () => {
    setSubNotasMobileOpen(!subNotasMobileOpen);
	if(subPodcastsMobileOpen){
		setSubPodcastsMobileOpen(!subPodcastsMobileOpen);
	}
  };
 
  const handleSubPodcastsMobile = () => {
    setSubPodcastsMobileOpen(!subPodcastsMobileOpen);
	if(subNotasMobileOpen){
		setSubNotasMobileOpen(!subNotasMobileOpen);
	}
  };

  useEffect(() => {

	Promise.all([
		fetch(process.env.NEXT_PUBLIC_API_BASEURL + '/api/categoria-notas')
			.then((response) => {
				if (!response.ok) {
				throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setSubNotasLinks(data.data);
			})
			.catch((error) => {
				setError("Error fetching data. Please try again later.");
			}),

		fetch(process.env.NEXT_PUBLIC_API_BASEURL + '/api/categoria-podcasts')
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Network response was not ok");
			  }
			  return response.json();
			})
			.then((data) => {
			  setSubPodcastsLinks(data.data);
			  
			})
			.catch((error) => {
			  setError("Error fetching data. Please try again later.");
			})

	]).then(()=>{
		setLoading(false);
	});

  }, []);
  
  return (
    <>
      <nav
        className="container relative  mx-auto flex items-center w-full drop-shadow-md z-10 justify-between lg:px-8"
        aria-label="Global"
      >
          <Link href="/" className="m-0 px-3 md:pt-2 md:pb-0 inline-block">
            <span className="sr-only">Geografias Inestables</span>
            <Image
              className="h-[70px] w-auto "
              src="/gi-logo-v2.png"
              alt="Geografías Inestables"
              width={160}
              height={70}
            />
          </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={handleNav}
          >
            <Image src="/menu.svg" width={24} height={24} className="h-12 w-12" alt="hamburguer menu" />
          </button>
        </div>
        <ul className="hidden lg:flex text-xl lg:gap-x-12">
          <li className="relative">
            <button className="flex items-center" onClick={handleSubNotas}>
              <i className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_86_135"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_86_135)">
                    <path
                      d="M4 18.5208C3.45 18.5208 2.97917 18.3319 2.5875 17.9541C2.19583 17.5763 2 17.1222 2 16.5917V5.01657H4V16.5917H19V18.5208H4ZM8 14.6625C7.45 14.6625 6.97917 14.4736 6.5875 14.0958C6.19583 13.718 6 13.2638 6 12.7333V1.1582H23V12.7333C23 13.2638 22.8042 13.718 22.4125 14.0958C22.0208 14.4736 21.55 14.6625 21 14.6625H8ZM8 12.7333H21V3.08738H8V12.7333ZM10 9.83952H14V5.01657H10V9.83952ZM15 9.83952H19V7.91034H15V9.83952ZM15 6.94575H19V5.01657H15V6.94575Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </i>
              Notas
            </button>
            <div
              className={
                subNotasOpen
                  ? "absolute bg-[#F2F2F2] top-[51px] block left-1 ease-in duration-200 z-50 w-max"
                  : "absolute bg-[#F2F2F2] top-[51px] hidden left-1 ease-in duration-200 overflow-hidden w-max"
              }
            >
				<ul className="divide-gray-100 grid grid-cols-1 gap-4 p-4 shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.25)]">
					{subNotasLinks.map((link) => (
						<li key={link.id} className='bg-white text-black text-base w-full min-w-[250px] rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] hover:bg-gray-300'>
							 
							<Link href={'/secciones/' + link.attributes.slug} className="flex w-full items-center p-2 tet-left">
								<span className="h-10 w-10 bg-[#D9D9D9] mr-3 shrink-0"></span>
								{link.attributes.Titulo}
							</Link>
						</li>
					))}
				</ul>
			</div>
          </li>
          <li className="relative">
            <button className="flex items-center" onClick={handleSubPodcasts}>
              <i className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_86_134)">
                    <path
                      d="M4 12H7C7.53043 12 8.03914 12.2107 8.41421 12.5858C8.78929 12.9609 9 13.4696 9 14V19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V14C15 13.4696 15.2107 12.9609 15.5858 12.5858C15.9609 12.2107 16.4696 12 17 12H20C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z"
                      fill="#212134"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_134">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              Podcasts
              <div
                className={
					subPodcastsOpen
					? "absolute bg-[#F2F2F2] top-[51px] block left-1 ease-in duration-200 z-50 w-max"
                  : "absolute bg-[#F2F2F2] top-[51px] hidden left-1 ease-in duration-200 overflow-hidden w-max"
				}
              >
				<ul className="divide-gray-100 grid grid-cols-1 gap-4 p-4 shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.25)]">
					{subPodcastsLinks.map((link) => (
						<li key={link.id} className="bg-white text-black text-base w-full w-[250px] rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] hover:bg-gray-300">
							<Link
								href={'/programas/' + link.attributes.slug}
								className='flex w-full items-center text-left p-2'
							>
								<span className="h-10 w-10 bg-[#D9D9D9] mr-3 shrink-0"></span>
								{link.attributes.Titulo}
							</Link>
						</li>
					))}
				</ul>

			  </div>
            </button>
          </li>
          <li>
            <Link href="/musica" className="flex items-center">
              <i className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_33_288)">
                    <path
                      opacity="0.3"
                      d="M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z"
                      fill="black"
                    />
                    <path
                      d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_288">
                      <rect width="24" height="24" fill="white" />
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
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              Buscar
            </Link>
          </li>
        </ul>
      </nav>



      <div
        className={
          hambMenuOpen
            ? "fixed right-0 top-0 w-full md:hidden h-screen bg-[#D9D9D9] px-2 py-4 z-50 shadow-md bg-gradient-to-b from-[#D9D9D9]/[.55] to-[#d9d9d9]"
            : "fixed right-[-100%] w-full top-0 h-screen px-2 py-4 z-50 shadow-md"
        }
      >
        <button className="navbar-close absolute right-2 top-2" onClick={handleNav}>
            <svg className="h-16 w-16 text-black font-light cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

        <div className="flex flex-col py-10 text-xl">
          <ul>
		  	<li className="my-3">
              <Link href="/busqueda" className=" text-black group flex w-full items-center p-4 whitespace-nowrap hover:bg-gray-200 rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
                <i className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
                Buscar
              </Link>
            </li>

            <li className="my-3">
              <button className="flex items-center w-full justify-between p-4 rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]" onClick={handleSubNotasMobile}>
                <div className="flex">
                  <i className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_86_135" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_86_135)">
                      <path d="M4 18.5208C3.45 18.5208 2.97917 18.3319 2.5875 17.9541C2.19583 17.5763 2 17.1222 2 16.5917V5.01657H4V16.5917H19V18.5208H4ZM8 14.6625C7.45 14.6625 6.97917 14.4736 6.5875 14.0958C6.19583 13.718 6 13.2638 6 12.7333V1.1582H23V12.7333C23 13.2638 22.8042 13.718 22.4125 14.0958C22.0208 14.4736 21.55 14.6625 21 14.6625H8ZM8 12.7333H21V3.08738H8V12.7333ZM10 9.83952H14V5.01657H10V9.83952ZM15 9.83952H19V7.91034H15V9.83952ZM15 6.94575H19V5.01657H15V6.94575Z" fill="#1C1B1F"/>
                    </g>
                    </svg>
                  </i>
                  Notas
                </div>
                <i>
                  {subNotasMobileOpen
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_649_2824" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_649_2824)"><path d="M5 13V11H19V13H5Z" fill="#1C1B1F"/></g></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_649_2775" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_649_2775)"><path d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#1C1B1F"/></g></svg>
                  }
                </i>
              </button>
                <ul
                  className={
                    subNotasMobileOpen
                    ? "h-fit ease-in duration-200 overflow-hidden mt-1" 
                    : "h-0 ease-in duration-200 overflow-hidden mt-1"
                  }
                >
                  {subNotasLinks.map((link) => (
                    <li key={link.id} className="bg-[#E6E6E6] text-black group text-md whitespace-nowrap border-b border-slate-200 rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] mb-2 hover:bg-gray-200">
                    <Link href={'/secciones/' + link.attributes.slug} className="flex w-full items-center p-4">
						<span className="h-10 w-10 bg-green mr-3"></span>	
                      	{link.attributes.Titulo}
                    </Link>
                  </li>
                  ))}
                </ul>
            </li>
            <li className="my-3">
				<button className="flex items-center w-full justify-between p-4 rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]" onClick={handleSubPodcastsMobile}>
					<div className="flex">
						<i className="px-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<g clipPath="url(#clip0_86_134)">
								<path d="M4 12H7C7.53043 12 8.03914 12.2107 8.41421 12.5858C8.78929 12.9609 9 13.4696 9 14V19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V14C15 13.4696 15.2107 12.9609 15.5858 12.5858C15.9609 12.2107 16.4696 12 17 12H20C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z" fill="#212134" />
							</g>
							<defs>
								<clipPath id="clip0_86_134">
								<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
							</svg>
						</i>
						Podcasts
					</div>
					<i>
						{subPodcastsMobileOpen
						? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_649_2824" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_649_2824)"><path d="M5 13V11H19V13H5Z" fill="#1C1B1F"/></g></svg>
						: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_649_2775" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_649_2775)"><path d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#1C1B1F"/></g></svg>
						}
					</i>
				</button>
					<ul
						className={
							subPodcastsMobileOpen
							? "h-fit ease-in duration-200 overflow-hidden mt-1" 
							: "h-0 ease-in duration-200 overflow-hidden mt-1"
						}
					>
						{subPodcastsLinks.map((link) => (
							<li key={link.id} className="bg-[#E6E6E6] text-black group text-md whitespace-nowrap border-b border-slate-200 rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] mb-2 hover:bg-gray-200">
                				
								<Link href={'/programas/' + link.attributes.slug} className="flex w-full items-center p-4">
									<span className="h-10 w-10 bg-green mr-3"></span>
									{link.attributes.Titulo}
								</Link>
							</li>
						))}
					</ul>
				
            </li>
            <li className="my-3">
              <Link href="/musica" className=" text-black group flex w-full items-center p-4 whitespace-nowrap rounded-md shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] hover:bg-gray-200">
                <i className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_33_288)">
                      <path
                        opacity="0.3"
                        d="M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z"
                        fill="black"
                      />
                      <path
                        d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33_288">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                Musica
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
