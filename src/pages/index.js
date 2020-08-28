import * as React from 'react';
import Button from '../components/button/index.js';
import { Link } from 'gatsby';

export default function Home() {
	return (
		<div>
			<h1>Hello world!</h1>
			<Button>Button</Button>
			<Link to="/contact/">Contact</Link>
		</div>
	);
}
