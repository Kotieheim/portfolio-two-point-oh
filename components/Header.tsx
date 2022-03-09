import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      {/* <Link href="/Other/Test">Test?</Link> */}
    </div>
  );
};

export default Header;
