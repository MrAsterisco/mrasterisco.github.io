import Link from "next/link";

interface ButtonProps {
  className?: string;
  href: string;
  target?: string;
  title: string;
}

export default function Button({
  className,
  href,
  target = "_self",
  title,
}: ButtonProps) {
  return (
    <Link
      className={`block border-1 border-accent hover:border-accent-dark dark:border-accent-dark dark:hover:border-accent shadow rounded-lg px-4 py-2 text-sm uppercase font-bold text-accent dark:text-accent-dark hover:text-white dark:hover:text-white hover:bg-accent dark:hover:bg-accent-dark transition-all ${className}`}
      href={href}
      target={target}
    >
      {title}
    </Link>
  );
}