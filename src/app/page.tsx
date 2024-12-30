import Link from "next/link";
import { posts } from "../data/postsData";

const HomePage: React.FC = () => {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No posts available!</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Sami's Blog</h1>
      <h1 className="text-2xl font-bold mb-6 text-center">Read More & Drop Comments !</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
          >
            <Link href={`/blog?id=${post.id}`}>
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
            <Link href={`/blog?id=${post.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
