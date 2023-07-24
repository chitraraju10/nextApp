import { useState } from 'react';
import Link from 'next/link';
import { Popover } from '@mantine/core';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';

import DeletePost from '../deletePost';
import AddPost from '../addPost';

function PostCard({ data }) {
	const [handleDelete, setHandleDelete] = useState(false);
	const [opened, setOpened] = useState(false);
	const [openPopover, setopenPopover] = useState(false);

	return (
		<>
			<div className="bg-slate-100 m-5 rounded-lg">
				<div>
					<img
						src={data?.coverPhoto}
						alt={data?.title}
						className="w-full"
					/>
				</div>
				<div>
					<div className="flex justify-between p-3">
						<h1 className="text-xl font-medium">{data?.title}</h1>
						<Popover
							width={200}
							position="left"
							withArrow
							shadow="md"
							opened={openPopover}
							onChange={setopenPopover}>
							<Popover.Target>
								<button onClick={() => setopenPopover(true)}>
									<BsThreeDotsVertical />
								</button>
							</Popover.Target>
							<Popover.Dropdown>
								<div>
									<button
										className="flex cursor-pointer text-lg"
										onClick={() => {
											setHandleDelete(true),
												setopenPopover(false);
										}}>
										<BsFillTrashFill className="mr-3 mt-1" />{' '}
										Delete
									</button>
									<button
										className="flex cursor-pointer text-lg"
										onClick={() => {
											setOpened(true),
												setopenPopover(false);
										}}>
										<BsFillPencilFill className="mr-3 mt-1" />{' '}
										Edit
									</button>
								</div>
							</Popover.Dropdown>
						</Popover>
					</div>
					<div className="flex justify-center mt-5 mb-5">
						<Link href={`/posts/${data?.id}`}>
							<button className="bg-[#FB7C51] pl-5 pr-5 p-3 rounded-md">
								Read
							</button>
						</Link>
					</div>
				</div>
			</div>

			{opened && (
				<AddPost opened={opened} setOpened={setOpened} data={data} />
			)}
			{handleDelete && (
				<DeletePost
					handleDelete={handleDelete}
					setHandleDelete={setHandleDelete}
					id={data?.id}
				/>
			)}
		</>
	);
}

export default PostCard;
