import { BsFillTrashFill } from 'react-icons/bs';

function PostCard({ data }) {
	return (
		<div className="bg-slate-100 m-5 p-5">
			<div>
				<BsFillTrashFill />
			</div>
			<h1>{data?.title}</h1>
			<p className="w-48">{data?.description}</p>
		</div>
	);
}

export default PostCard;
