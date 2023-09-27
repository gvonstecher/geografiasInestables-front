import { useState, useEffect } from 'react';

function TiempoDeLectura({ cuerpo }) {
  const palabrasPorMinuto = 200; // Puedes ajustar este valor según el ritmo de lectura promedio
  const [tiempoLectura, setTiempoLectura] = useState(0);

  useEffect(() => {
    const palabrasTotales = cuerpo.split(/\s+/).length;
    const tiempoEstimado = Math.ceil(palabrasTotales / palabrasPorMinuto);

    setTiempoLectura(tiempoEstimado);
  }, [cuerpo]);

  return (
    <div className='border-t border-dark-green pt-2 text-lg text-gray-800'>
    <i className='inline w-3 h-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 35" fill="none" className='inline'>
            <g clipPath="url(#clip0_35_273)">
                <path opacity="0.3" d="M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z" fill="#00695C"/>
                <path opacity="0.3" d="M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z" fill="#00695C"/>
                <path d="M25.5 0H8V8.75L13.8333 14.5833L8.01458 20.4312L8 29.1667H25.5L25.4854 20.4312L19.6667 14.5833L25.5 8.76458V0ZM22.5833 21.1458V26.25H10.9167V21.1458L16.75 15.3125L22.5833 21.1458ZM22.5833 8.02083L16.75 13.8542L10.9167 8.02083V2.91667H22.5833V8.02083Z" fill="#00695C"/>
            </g>
            <defs>
                <clipPath id="clip0_35_273">
                    <rect width="35" height="35" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </i>
    {tiempoLectura} min de lectura
</div>
  );
}

export default TiempoDeLectura;
