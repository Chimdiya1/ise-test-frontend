import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Go to{" "}
      <Link href="/dashboard" className="underline font-semibold">
        Dashboard
      </Link>
    </main>
  );
}
