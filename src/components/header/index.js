import * as React from 'react';
import { Nav } from '../nav';

import './index.scss';

export const Header = () => {
	return (
		<div className="c-header">
			<a href="#">Logo</a>

			<Nav />
		</div>
	);
};

export default Header;
