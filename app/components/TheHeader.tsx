import Link from "next/link";

export default function TheHeader() {
  return (
    <header>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
    </header>
  )
}
