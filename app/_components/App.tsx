import Image from "next/image";
import Link from "next/link";
import AnimatedTile from "./AnimatedTile";

export interface App {
  name: string;
  iconSrc: string;
  iconAlt: string;
  linkURL: string;
  platforms: string[];
}

export default function App({
  name,
  iconSrc,
  iconAlt,
  linkURL,
  platforms,
}: App) {
  return (
    <AnimatedTile className="shadow overflow-hidden rounded-lg">
      <div className="w-[154px] text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow border-1 border-gray-300 dark:border-gray-700 hover:border-accent dark:hover:border-accent-dark transition-all h-full">
        <Link
          href={linkURL}
          target='_blank'
          className="block"
        >
          <div className="p-8 flex flex-col gap-4 items-center">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={64}
              height={64} />
            <h3 className="text-slate-900 dark:text-slate-300 text-sm font-bold">{name}</h3>
            <div className="text-[9px] flex gap-1">
              {platforms.map((platform, index) => (
                <span key={index} className="px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-md">{platform}</span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </AnimatedTile>
  );
}