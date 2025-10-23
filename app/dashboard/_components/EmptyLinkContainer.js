import Image from "next/image";

export default function EmptyLinkContainer() {
  return (
    <div
      className="mt-6 w-full rounded-xl bg-custom-grey-50 py-[67px]
            max-custom-semism:py-[31px] max-custom-semism:px-6"
    >
      <Image
        src="/images/illustration-empty.svg"
        className="mx-auto
                max-custom-semism:w-[124px]"
        width={249}
        height={160}
        alt="A hand clicking on a phone"
      />

      <h1
        className="mt-10 text-center instrument-sans font-bold text-[32px] text-custom-grey-900
              max-custom-semism:text-2xl"
      >
        Let&apos;s get you started
      </h1>

      <div className="mt-6 max-w-[488px] mx-auto text-center">
        <p className="instrument-sans font-normal text-base text-custom-grey-500">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
}
