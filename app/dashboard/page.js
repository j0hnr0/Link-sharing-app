import Image from "next/image";
import Header from "./_components/Header";

export default function Dashboard() {
  return (
    <main
      className="bg-custom-grey-50 p-6
    max-custom-semism:p-0"
    >
      <Header />

      <div className="mt-6 flex gap-6">
        <div className="bg-white rounded-xl py-[116px] px-[126px]">
          <Image
            src="/images/illustration-phone-mockup.svg"
            width={307}
            height={631}
            alt="A Phone Mockup"
          />
        </div>

        <div className="bg-white rounded-xl pt-10 px-10 pb-6">
          <h1 className="instrument-sans font-bold text-[32px] text-custom-grey-900">
            Customize your links
          </h1>
        </div>
      </div>
    </main>
  );
}
