import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';

import DeletePost from '../deletePost';
import AddPost from '../addPost';
import Link from 'next/link';

function PostCard({ data }) {
	const[handleDelete,setHandleDelete] = useState(false)
	const [opened,setOpened] = useState(false)
	return (
		<>
		<div className="bg-slate-100 m-5 p-5 rounded-md">
			<div 
			// style={{'--image-url': `url(${data?.coverPhoto})`}} 
			 className=' w-full flex justify-end' >
				<button className='mr-3 cursor-pointer' onClick={() => setHandleDelete(true)}>
				<BsFillTrashFill  />
				</button>
				<button className='cursor-pointer' onClick={() => setOpened(true)}>
				<BsFillPencilFill />
				</button>
			</div>
			<div>
			<img src={data?.coverPhoto} alt={data?.title} className='w-full'/>
			</div>
			<div className='flex flex-col justify-between'>
			<div className=' pt-3 pb-5'>
			<h1 className='text-xl font-medium'>{data?.title}</h1>
			{/* <p className="pt-3 truncate">{data?.description}</p> */}
			</div>
            <div className='flex justify-center'>
			<Link href={`/posts/${data?.id}`}>
			<button className="bg-[#FB7C51] pl-5 pr-5 p-3 rounded-md">
				Read
			</button>
			</Link>
			</div>
			</div>
		</div>

        {opened && <AddPost opened={opened} setOpened={setOpened} data={data}/>}
		{handleDelete && <DeletePost handleDelete={handleDelete} setHandleDelete={setHandleDelete} id={data?.id} />}
		</>
	);
}





export default PostCard;
