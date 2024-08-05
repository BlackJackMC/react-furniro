'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header({ nav }) {
  const page = usePathname();

  return (
    <>
      <header className="mx-8 py-5 flex justify-between items-center">
        <Link href="/" className="flex flex-row justify-items-center items-center">
          <Image
            src="/images/Furniro.svg"
            alt="Furniro icon"
            width={50}
            height={32}
          />
          <h1 className="text-[34px] font-bold leading-none mx-1">Furniro</h1>
        </Link>
        <nav>
          <ul className="flex">
            {nav.map((e, i) => (
              <li key={e.id} className={`mx-8 ${page === e.url?"font-bold":"font-medium"}`}>
                <Link href={e.url}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul>
            
          </ul>
        </nav>
      </header>
    </>
  );
}
