import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	return (
		<div className="bg-black/80 h-16 z-50 flex justify-between items-center pl-10 pr-10 fixed w-full">
			<Link href="/home">
				<p className="text-white text-xl font-semibold">Next App</p>
			</Link>
			<div className="flex ">
				<Link href="/home">
					<p
						className={`${
							router?.asPath === '/home'
								? 'text-orange-500 text-xl font-semibold pr-10'
								: 'text-white text-xl font-semibold pr-10'
						}`}>
						Home
					</p>
				</Link>
				<Link href="/posts">
					<p
						className={`${
							router?.asPath?.includes('/posts')
								? 'text-orange-500 text-xl font-semibold pr-10'
								: 'text-white text-xl font-semibold pr-10'
						}`}>
						Blogs
					</p>
				</Link>
				<Link href="/contactUs">
					<p
						className={`${
							router?.asPath === '/contactUs'
								? 'text-orange-500 text-xl font-semibold pr-10'
								: 'text-white text-xl font-semibold pr-10'
						}`}>
						Contact Us
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Header;
