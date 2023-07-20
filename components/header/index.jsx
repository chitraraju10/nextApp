import { Avatar } from '@mantine/core';
import Link from 'next/link';

function Header() {
	return (
		<div className="bg-black/80 h-16 flex justify-between items-center pl-10 pr-10">
			<Link href="/home">
				<p className="text-white text-xl font-semibold">Next Js</p>
			</Link>
			<div className="flex ">
				<Link href="/home">
					<p className="text-white text-xl font-semibold pr-10">
						Home
					</p>
				</Link>
				<Link href="/posts">
					<p className="text-white text-xl font-semibold pr-10">
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
