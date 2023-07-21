import { Avatar } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter()
	
	return (
		<div className="bg-black/80 h-16 flex justify-between items-center pl-10 pr-10">
			<Link href="/home">
				<p className="text-white text-xl font-semibold">LearnHub</p>
			</Link>
			<div className="flex ">
				<Link href="/home">
					<p className={`${router?.asPath === '/home' ? 'text-orange-500 text-xl font-semibold pr-10' : 'text-white text-xl font-semibold pr-10'}`}>
						Home
					</p>
				</Link>
				<Link href="/posts">
					<p className={`${router?.asPath === '/posts' ? 'text-orange-500 text-xl font-semibold pr-10' : 'text-white text-xl font-semibold pr-10'}`}>
						Blogs
					</p>
				</Link>
				<Avatar
					component="a"
					// href="https://github.com/rtivital"
					target="_blank"
					src="/assets/images/avatar.png"
					alt="it's me"
				/>
			</div>
		</div>
	);
}

export default Header;
