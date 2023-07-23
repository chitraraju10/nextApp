import { TextInput } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { useCreateContactMutation } from "@/store/apis";
import { useEffect } from "react";

const ContactUsPage = () => {
  const [createContact] = useCreateContactMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm();

  const onSuccess = (data) => {
    createContact(data).then((res) => {
      if (res.data) {
        return res.data;
      }
      if (res.error) {
        return res.error;
      }
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-[#FB7C51]/70 m-auto w-[40vw] h-[50vh] flex flex-col justify-center  rounded-md">
        <p className="text-center text-xl font-bold">Contact Us</p>
        <form onSubmit={handleSubmit(onSuccess)}>
          <Controller
            control={control}
            rules={{ required: "Required" }}
            name="name"
            render={({ field }) => (
              <TextInput
                {...field}
                label="Name"
                className="w-full mb-5 pl-8 pr-8"
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: "Required" }}
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                label="Email"
                className="w-full mb-5 pl-8 pr-8"
              />
            )}
          />
          <div className="flex justify-center">
            <button className="bg-[#FB7C51] pl-5 pr-5 p-2 m-3 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
