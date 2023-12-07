import Counter from "@/components/Counter/Counter";
import Link from "next/link";
export const metadata = {
  title: "Home",
  description: "This is Home Page",
};

const HomePage = () => {
  // throw new Error();

  return (
    <div className="space-y-4">
      <h2>This is Next App</h2>
      <Counter></Counter>
      <div className="flex gap-5">
        <Link href="/about">
          <button className="px-2 py-1 bg-gray-400">About</button>
        </Link>
        <Link href="/news">
          <button className="px-2 py-1 bg-gray-400">News</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
