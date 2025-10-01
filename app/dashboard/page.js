import Logo from "@/_components/Logo";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="bg-custom-grey-50 p-6">
      <header className="bg-white p-4 flex justify-between items-center rounded-xl">
        <Logo className="w-[146px] h-8" />

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="py-4 px-6 rounded-lg bg-custom-grey-100 flex justify-center items-center gap-2 cursor-pointer"
          >
            <Image
              src="/images/icon-link.svg"
              width={20}
              height={20}
              alt="Links button icon"
              priority
            />
            <span className="instrument-sans font-semibold text-base text-custom-purple-600">
              Links
            </span>
          </button>
        </div>
      </header>
    </main>
  );
}
