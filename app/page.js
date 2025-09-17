import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-custom-gray-50">
      <div className="flex flex-col justify-center items-center gap-12">
        <Image
          src="/images/logo-devlinks-large.svg"
          width={182}
          height={40}
          alt="DevLinks Logo"
          priority
        />
      </div>
    </main>
  );
}
