import { Modal } from '@mantine/core';
import { useDeletePostMutation } from '@/store/apis';

function DeletePost({ handleDelete, setHandleDelete, id }) {
	const [deleteBlog] = useDeletePostMutation();

	const onDelete = (data) => {
		deleteBlog(data).then((res) => {
			if (res.data) {
				setHandleDelete(false);
			}
			if (res.error) {
				toast.error(res.error);
			}
		});
	};

	return (
		<div>
			<Modal
				opened={handleDelete}
				onClose={() => setHandleDelete(false)}
				title="Delete Post"
				centered>
				<div>
					<p className="text-xl p-5">
						Are you sure. You want to delete the Post!
					</p>
					<div className="flex justify-end">
						<button
							className="bg-red-500 p-2 m-2 rounded-md text-white"
							onClick={() => onDelete(id)}>
							Confirm
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default DeletePost;
