import { Form, Input, Select, Tooltip, Button, Space, Typography } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/posts/", {
        post_type: data.post_type,
        body: data.body,
        upvotes: 0,
        downvotes: 0,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload(false);
      });
  };

  return (
    <div>
      <h1>Create Post </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input label="Post" {...register("body")} />
        <select label="Post type" {...register("post_type")}>
          <option value="Boast">Boast</option>
          <option value="Roast">Roast</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
