import * as React from 'react';
import Button from '../components/button/index.js';
import { Link } from 'gatsby';

export default function Home() {
	return (
		<div>
			<h1>Welcome to Contact page</h1>
			<Button>Button</Button>
			<Link to="/">Home</Link>
		</div>
	);
}
