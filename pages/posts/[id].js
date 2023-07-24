import dynamic from 'next/dynamic';

const CompletePost = dynamic(
	() => import('@/components/posts/components/completePostPage'),
	{
		ssr: false,
	}
);

function CompletePostDetails() {
	return <CompletePost />;
}

export default CompletePostDetails;
