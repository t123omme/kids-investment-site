import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Kids Investment Planner</h1>
      <p>Choose a tool below to get started:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/calculator">Savings Calculator</Link></li>
        <li><Link href="/529">529 Plan Advantages by State</Link></li>
        <li><Link href="/401k">When to Start a 401k</Link></li>
      </ul>
    </div>
  );
}
