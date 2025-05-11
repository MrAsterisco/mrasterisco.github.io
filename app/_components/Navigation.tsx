"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {


  return (
    <nav className="flex gap-8 bg-gray-50 dark:bg-gray-900 lg:rounded-b-lg shadow mx-auto px-8 md:px-12 lg:px-20 py-8">
      <NavigationLink
        href="/"
        title="Home"
      />
      <NavigationLink
        href="/leadership"
        title="Leadership"
      />
      <NavigationLink
        href="/work"
        title="Work"
      />
    </nav>
  )
}

interface NavigationLinkProps {
  href: string;
  title: string;
}

function NavigationLink({
  href,
  title,
}: NavigationLinkProps) {
  const pathname = usePathname();

  return <Link
    className={`hover:text-accent dark:hover:text-accent text-sm hover:underline transition-all ${pathname === href ? "font-bold text-accent dark:text-accent-dark" : "text-slate-900 dark:text-slate-300"}`}
    href={href}
  >
    {title}
  </Link>
}