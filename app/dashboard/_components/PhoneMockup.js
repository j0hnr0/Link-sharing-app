import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div
      className="w-[40%] bg-white rounded-xl py-[116px]
        max-custom-md:hidden"
    >
      <div className="border border-red-500 w-max mx-auto relative">
        <Image
          src="/images/phone-cover.png"
          width={307}
          height={631}
          alt="A Phone Mockup"
        />

        <Image
          src="/images/phone-header.png"
          className="absolute top-[63px] left-1/2 -translate-x-1/2"
          width={237}
          height={158}
          alt="A placeholder for profile information."
        />
      </div>
    </div>
  );
}
