import Head from "next/head";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";

export default function Page() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Portfolio?</title>
        </Head>
        <HomePage />
      </Layout>
    </>
  );
}
