
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { posts } from "../../data/postsData";
import CommentSection from "../../components/CommentSection";

interface Post {
  id: string;
  title: string;
  content: string;
}

const BlogDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      const foundPost = posts.find((p) => p.id === id);
      setPost(foundPost || null);
    }
  }, [id]);

  if (!post) return <p className="text-center text-gray-500 mt-10">Post not found!</p>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-8">{post.content}</p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default BlogDetailPage;
