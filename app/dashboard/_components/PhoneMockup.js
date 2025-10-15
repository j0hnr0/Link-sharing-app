import Image from "next/image";

export default function PhoneMockup() {
  const items = ["1", "2", "2", "2", "2", "2", "2", "2", "2"];

  return (
    <div
      className="w-[40%] bg-white rounded-xl py-[116px]
        max-custom-md:hidden"
    >
      <div className="w-max max-h-[631px] mx-auto relative">
        <Image
          src="/images/phone-cover.png"
          width={307}
          height={631}
          alt="A Phone Mockup"
        />
        <div
          className="w-full max-w-[237px] h-[514px] mx-auto absolute top-[63px] left-1/2 -translate-x-1/2 overflow-y-auto
            [&::-webkit-scrollbar]:hidden 
            [-ms-overflow-style:'none'] 
            [scrollbar-width:'none']"
        >
          <Image
            src="/images/phone-header.png"
            width={237}
            height={158}
            alt="A placeholder for profile information."
          />

          <ul className="mt-[36px]">
            {items.map((item, index) => (
              <li
                key={index}
                className="mt-5 w-full h-[44px] rounded-lg bg-custom-grey-100"
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
