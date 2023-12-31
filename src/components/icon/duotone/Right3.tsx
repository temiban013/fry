import React, { SVGProps } from 'react';

const SvgRight3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.293 14.293a1 1 0 001.414 1.414l6-6a1 1 0 00.03-1.383l-5.5-6a1 1 0 00-1.474 1.352l4.853 5.294-5.323 5.323z'
					fill='currentColor'
				/>
				<path
					d='M15.5 8a1 1 0 010 2H9a1 1 0 00-1 1v10.042a1 1 0 01-2 0V11a3 3 0 013-3h6.5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRight3;
