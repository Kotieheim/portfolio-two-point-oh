import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.css";

type Props = {
  children: any;
};

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>My PortoRosso</title>
      </Head>

      <main className={styles.main}>
        <Header />
        {props.children}
      </main>
    </>
  );
};

export default Layout;
