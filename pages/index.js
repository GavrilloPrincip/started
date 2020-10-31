import Link from "next/link";
import Navbar from "../components/navbar";
const HomePage = ({ data }) => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <ul>
        {data.results.map((i) => (
          <Link href={`post/${encodeURIComponent(i.name)}`} key={i.id}>
            <a>
              <li>{i.name}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(x) {
  const api = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await api.json();
  return { props: { data } };
}

export default HomePage;
