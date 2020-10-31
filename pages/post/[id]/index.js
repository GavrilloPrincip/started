const X = ({ data }) => {
  return (
    <div>
      <h1>Post</h1>
      <p>{data}</p>
    </div>
  );
};

export async function getStaticProps(ctx) {
  console.log("emre");
  return { props: { data: ctx.params.id } };
}

export async function getStaticPaths() {
  const api = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await api.json();
  return {
    paths: data.results.map((c) => {
      return { params: { id: encodeURIComponent(c.name) } };
    }),
    fallback: false,
  };
}

export default X;
