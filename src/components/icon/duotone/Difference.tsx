import React, { SVGProps } from 'react';

const SvgDifference = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6 9v6a3 3 0 003 3h6v.818C15 20.232 14.232 21 12.818 21H5.182C3.768 21 3 20.232 3 18.818v-7.636C3 9.768 3.768 9 5.182 9H6zm11 7v-6a3 3 0 00-3-3H8v-.818C8 4.768 8.768 4 10.182 4h7.636C19.232 4 20 4.768 20 6.182v7.636C20 15.232 19.232 16 17.818 16H17z'
					fill='currentColor'
				/>
				<path
					d='M9.273 9h4.454C14.552 9 15 9.448 15 10.273v4.454c0 .825-.448 1.273-1.273 1.273H9.273C8.448 16 8 15.552 8 14.727v-4.454C8 9.448 8.448 9 9.273 9z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgDifference;
