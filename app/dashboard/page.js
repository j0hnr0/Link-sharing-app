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
      </div>
    </main>
  );
}
