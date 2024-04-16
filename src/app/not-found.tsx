import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-full flex-col items-center justify-between p-3 md:p-8 mb-10">
      <Image
        src="/ooops.png"
        alt="Banner for article"
        className="object-cover z-50"
        fill
      />
      <div className="absolute top-20 left-20 text-white z-50">
        <h2 className="text-8xl mb-6 font-bold">Not Found</h2>
        <p className="text-2xl mb-4">Could not find requested resource</p>
        <Link className="text-2xl underline" href="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}
