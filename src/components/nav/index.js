import * as React from 'react';

import './index.scss';

export const Nav = () => {
	return (
		<nav className="c-nav">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>

				<li>
					<a href="/about/">About</a>
				</li>

				<li>
					<a href="/contact/">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
