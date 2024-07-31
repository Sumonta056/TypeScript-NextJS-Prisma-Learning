import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-black">Hello NEXT JS</h1>
      <Link href="/users" className="border-2 ">
        Go to Users
      </Link>
      <ProductCard />
    </main>
  );
}
