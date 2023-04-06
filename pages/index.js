import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is my page description" />
        <meta property="og:title" content="Blog | Home" />
        <meta property="og:description" content="This is my page description" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
        />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="My Page Title" />
        <meta
          name="twitter:description"
          content="This is my page description"
        />
        <meta name="twitter:image" content="https://example.com/my-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h5>Blog</h5>
      <p>loremx3</p>
    </div>
  );
}
