import * as React from 'react';
import Button from '../components/button';
import { Link } from 'gatsby';
import { App } from '../components/app';
import { Shell } from '../components/shell';
import { Header } from '../components/header';

export default function Home() {
	return (
		<App>
			<Shell>
				<Header />
				<main className="o-main">
					<h1>Welcome to Contact page</h1>

					<Button>Button</Button>

					<Link to="/">Home page</Link>
				</main>
			</Shell>
		</App>
	);
}
