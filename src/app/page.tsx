import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/todo">
        <Button>Todo</Button>
      </Link>
    </main>
  );
}
