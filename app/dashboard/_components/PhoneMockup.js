import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div
      className="w-[40%] bg-white rounded-xl py-[116px]
        max-custom-md:hidden"
    >
      <Image
        src="/images/illustration-phone-mockup.svg"
        className="mx-auto"
        width={307}
        height={631}
        alt="A Phone Mockup"
      />
    </div>
  );
}
