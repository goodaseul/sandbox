import Pagination from "./Pagination";
import PostHeader from "./PostHeader";
import PostList from "./PostList";

export default function PostPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <PostHeader />
        <PostList />
        <Pagination />
      </div>
    </>
  );
}
