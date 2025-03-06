import { useQuery } from "react-query";

const fetchPosts = async () =>
{
    try
    {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok)
        {
            throw new Error("Failed to fetch posts");
        }

        return res.json();

    } 
    catch (error)
    {
        throw new Error(error.message || "Unknown error");
    }
};

const ErrorComponent = ({ message }) => ( <p style={{ color: "red" }}>Error: {message}</p>);
const LoadingComponent = () => <p>Loading posts...</p>;

function PostsComponent()
{
  const { data: posts, isLoading, error, isError, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 5000,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch Posts</button>
    </div>
  );
}

export default PostsComponent;
