import { useState } from 'react';
import AddPost from './components/addPost';
import { useRouter } from 'next/router';
import { useGetBlogsQuery } from '@/store/apis';
import PostCard from './components/postCard';

function PostsPage() {
	const [opened, setOpened] = useState(false);
	const router = useRouter();
	

	const { data: viewReportData } = useGetBlogsQuery();

	return (
		<>
			<div className="flex justify-end p-10">
				<button
					className="bg-[#FB7C51] pl-5 pr-5 mt-16 p-3 rounded-md"
					onClick={() => setOpened(true)}>
					Add Blog
				</button>
			</div>
			<div className="grid grid-cols-4">
				{viewReportData?.map((b) => (
					<PostCard data={b} />
				))}
			</div>
			{opened && <AddPost opened={opened} setOpened={setOpened} data={null}/>}
		</>
	);
}

export default PostsPage;
