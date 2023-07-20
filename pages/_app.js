import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import {
	Provider as ReduxProvider,
	useDispatch,
	useSelector,
} from 'react-redux';
import store from '@/store/store';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	router.replace('/auth/login').then(() => setLoading(false));
	// }, []);

	// if (loading) {
	// 	return <p>Loading...</p>;
	// }

	return (
		<ReduxProvider store={store}>
			<div className={inter.className}>
				{router?.asPath?.includes('/auth') ? '' : <Header />}
				<Component {...pageProps} />
			</div>
		</ReduxProvider>
	);
}
