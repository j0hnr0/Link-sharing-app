import Image from "next/image";

export default function NavButton({ imgSrc, imgAlt, text }) {
  return (
    <button
      type="button"
      className="py-4 px-6 rounded-lg bg-custom-grey-100 flex justify-center items-center gap-2 cursor-pointer"
    >
      <Image src={imgSrc} width={20} height={20} alt={imgAlt} />
      <span className="max-custom-semism:hidden block instrument-sans font-semibold text-base text-custom-purple-600">
        {text}
      </span>
    </button>
  );
}
