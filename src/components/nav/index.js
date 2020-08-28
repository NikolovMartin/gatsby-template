import * as React from 'react';

import './index.scss';

export const Nav = () => {
	return (
		<nav className="c-nav">
			<ul>
				<li>
					<a href="#">Home</a>
				</li>

				<li>
					<a href="#">About</a>
				</li>

				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
