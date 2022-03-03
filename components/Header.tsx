import { useRouter } from 'next/router'
import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Other/Test">Test?</Link>
    </div>
  )
}


export default Header