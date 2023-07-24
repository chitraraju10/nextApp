import { useForm, Controller } from 'react-hook-form';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { useRouter } from 'next/router';

function LoginPage(props) {
	const router = useRouter();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const getFormErrorMessage = (name) => {
		return (
			errors[name] && (
				<p className="text-[#FC0101] text-xs">{errors[name].message}</p>
			)
		);
	};

	const onSuccessfullLogin = (data) => {
		console.log({ ...data, type: props?.type });
	};

	return (
		<div className="bg-cyan-100 bg-cover bg-no-repeat h-[100vh] flex justify-center items-center">
			<div className="bg-white rounded-md w-[35vw] h-[50vh] p-10">
				<p className="text-center pb-10">Hey there! Welcome</p>
				<form onSubmit={handleSubmit(onSuccessfullLogin)}>
					<Controller
						control={control}
						rules={{ required: 'Required' }}
						name="email"
						render={({ field }) => (
							<TextInput
								{...field}
								label="Email"
								className="w-full mb-5"
								placeholder="Enter Email"
							/>
						)}
					/>
					{getFormErrorMessage('email')}
					<Controller
						control={control}
						rules={{ required: 'Required' }}
						name="password"
						render={({ field }) => (
							<PasswordInput
								{...field}
								label="Password"
								className="w-full"
								placeholder="Password"
								classNames={{
									visibilityToggle: 'text-cyan-500',
								}}
							/>
						)}
					/>
					{getFormErrorMessage('password')}
					<div className="flex justify-center ">
						<button
							className="bg-[#1FBED6] pl-10 pr-10 rounded-md p-2 w-cover text-white m-5"
							onClick={() => router?.replace('/auth/login')}>
							Sign in
						</button>
						<button
							// type="button"
							onClick={() => router?.replace('/auth/signUp')}
							className="border-[#1FBED6] border-2 pl-10 pr-10 rounded-md p-2 w-cover text-[#1FBED6] m-5">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
