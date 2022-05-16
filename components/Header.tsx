import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logoImage from "../public/logoipsum-logo-37.svg";
import { socialLinks } from "../data/portfolioData";
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
        {socialLinks.map((social) => (
          <a rel="noreferrer" target="_blank" key={social.id} href={social.url}>
            <FontAwesomeIcon icon={social.faIcon} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
