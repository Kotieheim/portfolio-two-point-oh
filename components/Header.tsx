import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logoImage from "../public/logoipsum-logo-37.svg";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Link passHref={true} href="/">
          <a>
            <Image
              width={30}
              alt="logo"
              src={logoImage}
              className={styles.navbar_logo__link}
            />
          </a>
        </Link>
      </div>
      <div className={styles.navbar_socials}>
        <Link passHref={true} href="/">
          <a>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
      </div>

      {/* <Link href="/Other/Test">Test?</Link> */}
    </nav>
  );
};

export default Header;
