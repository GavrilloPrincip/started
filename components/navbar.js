import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 50,
        background: "black",
        color: "white",
      }}
    >
      <div style={{ marginLeft: 30, marginRight: 50 }}>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
