import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../../components/AppLayout/AppLayout";

const newPost = (props) => {
  const generatedpost = async () => {
    const respo = await fetch(`/api/generateBlog`, { method: "POST" });
    const post = await respo.json();
    console.log(post, "response");
  };
  return (
    <div>
      this is the news Post
      <div>
        <button className="btn" onClick={generatedpost}>
          Generate Blogs
        </button>
      </div>
    </div>
  );
};

newPost.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: { user: "this is the user" },
  };
});
export default newPost;
