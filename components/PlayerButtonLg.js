import React from 'react';

const PlayerButtonLg = ({ duracion=null, onClick}) => {
	const handleButtonClick = () => {
    	onClick();
  };

  return (
			<button 
					className='bg-green hover:bg-dark-green text-white font-noto rounded-full py-3 px-5 flex items-center'
					onClick={handleButtonClick}
			>
					<i className='pe-3'>
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
						<path d="M0.126953 0.5V14.5L10.3032 7.5L0.126953 0.5Z" fill="white"/>
					</svg>
					</i>
					Escuchar 
					{typeof duracion != "object" &&
						<>
							 - {duracion}
						</>
					}
			</button>
  )
};

export default PlayerButtonLg;
