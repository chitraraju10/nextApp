import { useEffect, useState } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { Modal, Textarea } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "@mantine/core";
import { useCreateBlogMutation } from "@/store/apis";
import { useUpdateBlogMutation } from "@/store/apis";
import getBase64 from "@/store/helper/base64Converter";

function AddPost({ opened, setOpened, data }) {
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const [file, setFile] = useState(null);

  const updateId = data?.id;

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSuccess = (data) => {
    if (updateId) {
      updateBlog({ id: updateId, body: data }).then((res) => {
        if (res.data) {
          setOpened(false);
        }
        if (res.error) {
          console.log(res.error);
        }
      });
    } else {
		{console.log(data)}
      createBlog(data).then((res) => {
        if (res.data) {
          setOpened(false);
        }
        if (res.error) {
          console.log(res.error);
        }
      });
    }
  };

  useEffect(() => {
    setValue("title", data?.title), setValue("description", data?.description);
  }, [data, data?.id]);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={data?.id ? "Edit Post" : "Add Post"}
        centered
      >
        <div>
          <form onSubmit={handleSubmit(onSuccess)}>
            <div className="mb-5">
              <Group position="start">
                <Controller
                  control={control}
                  rules={{ required: "Required" }}
                  name="coverPhoto"
                  render={({ field }) => (
                    <FileButton
					{...field}
					  onChange={(e) => {
						getBase64(e, (result) => {
						  field?.onChange(result);
						});
						setFile(e)
					  }}
                      accept="image/png,image/jpeg"
                    >
                      {(props) => <button {...props} className="bg-cyan-100 p-2 rounded-md">Upload image</button>}
                    </FileButton>
                  )}
                />
              </Group>
              {file && (
                <Text size="sm" mt="sm">
                  Picked file: {file.name}
                </Text>
              )}
            </div>
            <Controller
              control={control}
              rules={{ required: "Required" }}
              name="title"
              render={({ field }) => (
                <TextInput {...field} label="Title" className="w-full mb-5" />
              )}
            />
            <Controller
              control={control}
              rules={{ required: "Required" }}
              name="description"
              render={({ field }) => (
                <Textarea
                  {...field}
                  label="Description"
                  withAsterisk
                  classNames={{ input: "h-72" }}
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
