/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
  { title: "Mern stack", excerpt: "Learn full stack developement" },
  { title: "React", excerpt: "Learn frontend development" },
];

export default function Home() {
  return (
    <div className="contaienr mx-auto px-10 mb-8">
      <Head>
        <title>Dev Blog</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 ">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky realtive top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
