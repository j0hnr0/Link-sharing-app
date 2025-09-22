import Image from "next/image";

export default function FormBackground({ children }) {
  return (
    <main
      className="min-h-screen flex justify-center items-center bg-custom-grey-50
    max-custom-sm:p-8 max-custom-sm:min-h-0"
    >
      <div
        className="flex flex-col justify-center items-center gap-12
      max-custom-sm:gap-16 max-custom-sm:items-start max-custom-sm:w-full"
      >
        <Image
          src="/images/logo-devlinks-large.svg"
          width={182}
          height={40}
          alt="DevLinks Logo"
          priority
        />

        {children}
      </div>
    </main>
  );
}
