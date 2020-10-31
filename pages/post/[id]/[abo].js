import { useRouter } from "next/router";

const Post = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Post id : {data} </h1>
      <h2>Post title :</h2>
    </div>
  );
};

export async function getStaticProps(x) {
  const data = x.params.id;
  return { props: { data } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1", abo: "2" } },
      { params: { id: "2", abo: "3" } },
      // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}
export default Post;
