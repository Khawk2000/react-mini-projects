import { SimpleForm, TextInput, DateInput, Edit } from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit title="Edit post" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
