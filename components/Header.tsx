import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logoImage from "../public/logoipsum-logo-37.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_main}>
        <Link href="/contact">
          <a className={styles.navbar_main__link}>Contact</a>
        </Link>
        <Link href="/work">
          <a className={styles.navbar_main__link}>Work</a>
        </Link>
      </div>
      <div className={styles.navbar_logo}>
        <Link href="/">
          <Image
            width={30}
            alt="logo"
            src={logoImage}
            className={styles.navbar_logo__link}
          />
        </Link>
      </div>
      <div className={styles.navbar_socials}>
        <Link href="/">social 1</Link>
        <Link href="/">social 1</Link>
      </div>

      {/* <Link href="/Other/Test">Test?</Link> */}
    </nav>
  );
};

export default Header;
