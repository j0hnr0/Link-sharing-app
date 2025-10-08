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
          <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <button
            type="button"
            className="mt-10 w-full rounded-lg border border-custom-purple-600 py-4 text-center cursor-pointer"
          >
            <span className="instrument-sans font-semibold text-base text-custom-purple-600">
              + Add new link
            </span>
          </button>

          <div className="mt-6 w-full rounded-xl bg-custom-grey-50 py-[67px]">
            <Image
              src="/images/illustration-empty.svg"
              className="mx-auto"
              width={249}
              height={160}
              alt="A hand clicking on a phone"
            />

            <h1 className="mt-10 text-center instrument-sans font-bold text-[32px] text-custom-grey-900">
              Let&apos;s get you started
            </h1>

            <div className="mt-6 max-w-[488px] mx-auto text-center">
              <p className="instrument-sans font-normal text-base text-custom-grey-500">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
