import Post from "./Post";
import Posts from "./Posts";

const PostList = () => {
  return (
    <>
      {Posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          nickname={post.author.nickname}
          date={post.date}
          content={post.content}
          image={post.image}
          isVerified={post.author.isVerified}
        />
      ))}
    </>
  );
};

export default PostList;
