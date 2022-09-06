import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dan Knight Portfolio</title>
      </Head>
      <NavBar />
      <Main />
      <About />
    </div>
  );
}
