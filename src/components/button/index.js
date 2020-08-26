import * as React from 'react';

import './index.scss';

export const Button = props => {
	const { type, children, className, onClick, ...rest } = props;
	//const classes = className ? className.split(' ') : [''];
	//const classNames = ['buttonStyles.c-btn'].concat(classes).join(' ');

	return (
		<button className={'c-btn'} type={type} onClick={onClick} {...rest}>
			{props.children}
		</button>
	);
};

export default Button;
