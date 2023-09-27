import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link';

const NavMenu = ({section}) => {
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let apiUrl = '';
  let tituloSeccion = '';
  let icon = '';
  let baseUrl = '';

  if(section == 'notas'){
    apiUrl = process.env.NEXT_PUBLIC_API_BASEURL+'/api/categoria-notas';
    baseUrl = '/secciones/';
    tituloSeccion = 'Notas';
    icon = `<i className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_86_135" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_86_135)">
                <path d="M4 18.5208C3.45 18.5208 2.97917 18.3319 2.5875 17.9541C2.19583 17.5763 2 17.1222 2 16.5917V5.01657H4V16.5917H19V18.5208H4ZM8 14.6625C7.45 14.6625 6.97917 14.4736 6.5875 14.0958C6.19583 13.718 6 13.2638 6 12.7333V1.1582H23V12.7333C23 13.2638 22.8042 13.718 22.4125 14.0958C22.0208 14.4736 21.55 14.6625 21 14.6625H8ZM8 12.7333H21V3.08738H8V12.7333ZM10 9.83952H14V5.01657H10V9.83952ZM15 9.83952H19V7.91034H15V9.83952ZM15 6.94575H19V5.01657H15V6.94575Z" fill="#1C1B1F"/>
                </g>
            </svg>
        </i>`;

  } else {
    apiUrl = process.env.NEXT_PUBLIC_API_BASEURL+'/api/categoria-podcasts';
    tituloSeccion = 'Podcasts';
    baseUrl = '/programas/';
    icon = `<i className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_86_134)">
                    <path d="M4 12H7C7.53043 12 8.03914 12.2107 8.41421 12.5858C8.78929 12.9609 9 13.4696 9 14V19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V14C15 13.4696 15.2107 12.9609 15.5858 12.5858C15.9609 12.2107 16.4696 12 17 12H20C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z" fill="#212134"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_86_134">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </i>`;

  }

  useEffect(() => {
    // Fetch data from your API here
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNavLinks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center items-center">
            <div className="content pe-2" dangerouslySetInnerHTML={{__html: icon}}></div> {tituloSeccion}
        </Menu.Button>

        <Menu.Items className="absolute mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-header-rgb shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {navLinks.map((link) => (
                <Menu.Item key={link.id} as={Fragment}>
                {({ active }) => (
                  <Link
                    href={baseUrl+link.attributes.slug}
                    className={`${
                      active ? 'bg-green text-white' : 'bg-white text-black'
                    } group flex w-full items-center px-4 py-3 text-sm whitespace-nowrap`}
                  >
                    {link.attributes.Titulo}
                  </Link>
                )}
                </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
  );
};

export default NavMenu;



