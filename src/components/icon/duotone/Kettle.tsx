import React, { SVGProps } from 'react';

const SvgKettle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 2c1.657 0 3 2.462 3 5.5 0 2.395-.835 4.432-2 5.187V19H6V9.207a.5.5 0 00-.146-.353l-1.48-1.48c-.204-.229-.186-.545.02-.728C6.927 4.395 8.962 3.013 10.5 2.5c1.416-.472 7.306-.534 7.427-.498L18 2zm-.5 9c.225 0 1.5-1.92 1.5-4 0-1.868-.5-2.5-1.5-3v7zM11 15h1a1 1 0 000-2h-1v-1h1a1 1 0 000-2h-1V9h1a1 1 0 000-2h-1a2 2 0 114 0v8a2 2 0 11-4 0z'
					fill='currentColor'
				/>
				<path
					d='M6 20h13a1 1 0 011 1v1H5v-1a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgKettle;
