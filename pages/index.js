import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is my page description" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is my page description" />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
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
