import { Modal, Textarea } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from '@mantine/core';
import { useCreateBlogMutation } from '@/store/apis';


function AddPost({ opened, setOpened }) {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const [createBlog] = useCreateBlogMutation();

	const onSuccess = (data) => {
		createBlog(data).then((res) => {
			if (res.data) {
				setOpened(false);
				// toast.success('Password Updated Successfully');
			}
			if (res.error) {
				toast.error(res.error);
			}
		});
	};

	return (
		<div>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Add Post"
				centered>
				<div>
					<form onSubmit={handleSubmit(onSuccess)}>
						<Controller
							control={control}
							rules={{ required: 'Required' }}
							name="title"
							render={({ field }) => (
								<TextInput
									{...field}
									label="Title"
									className="w-full mb-5"
								/>
							)}
						/>
						<Controller
							control={control}
							rules={{ required: 'Required' }}
							name="description"
							render={({ field }) => (
								<Textarea
									{...field}
									label="Description"
									withAsterisk
									classNames={{ input: 'h-72' }}
								/>
							)}
						/>
						<div className="flex justify-end">
							<button className="bg-[#FB7C51] pl-5 pr-5 p-2 m-3 rounded-md">
								Save
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
}

export default AddPost;
