import Head from "next/head";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Portfolio?</title>
        </Head>
        <h1>is this work</h1>
      </Layout>
    </>
  );
}
