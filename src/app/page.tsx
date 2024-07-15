import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <Link href='/react-markdown'>react-markdown</Link>
      <Link href='/markdown-to-jsx'>markdown-to-jsx</Link>
    </main>
  );
}
