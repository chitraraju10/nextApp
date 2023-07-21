import Link from 'next/link';
import React from 'react';

function HomePage() {
	return (
		<div className='flex flex-col justify-center items-center align-items-center'>
			<h1 className='text-[50px] font-bold'>Welcome to Leran Hub</h1>
			<Link href={'/posts'}>
			<button className='bg-cyan-500 p-2 rounded-md'>
				Get Started
			</button>
			</Link>
			</div>
	)
}

export default HomePage;
