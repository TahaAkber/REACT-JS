import { post as Ipost } from "./main";
interface props {
  post: Ipost;
}
export const Post = (props: props) => {
  //structure data of post as props
  const { post } = props;
  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="description">
        <p>{post.description}</p>
      </div>
      <div>
        <p>@{post.username}</p>
      </div>
    </div>
  );
};
