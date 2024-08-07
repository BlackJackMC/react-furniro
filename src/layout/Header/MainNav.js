'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav({ nav }) {
    const page = usePathname();
    return (
        <nav>
            <ul className="flex">
                {nav.map((e, i) => (
                <li key={e.id} className={`mx-8 ${page === e.url?"font-bold":"font-medium"}`}>
                <Link href={e.url}>{e.name}</Link>
                </li>
                ))}
            </ul>
        </nav>
    );
}