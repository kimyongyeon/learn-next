import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link href="/home">Home</Link> | <Link href="/login">Login</Link>
			</nav>
			<div>{children}</div>
		</div>
	);
}
