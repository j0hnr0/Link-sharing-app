import Image from "next/image";
import Link from "next/link";

export default function Preview() {
  return (
    // No responsive yet
    <main className="p-6">
      <div className="absolute -z-50 top-0 left-0 right-0 w-full h-[357px] rounded-b-4xl bg-custom-purple-600"></div>

      <header className="w-full p-4 rounded-[12px] bg-white flex justify-between">
        <Link
          href="/dashboard/links"
          className="w-full max-w-[153px] bg-transparent py-4 rounded-[8px] border border-custom-purple-600 text-center"
        >
          <p className="instrument-sans font-semibold text-base text-custom-purple-600">
            Back to Editor
          </p>
        </Link>

        <button
          type="button"
          className="w-full max-w-[127px] bg-custom-purple-600 rounded-[8px] py-4 text-center"
        >
          <p className="instrument-sans font-semibold text-base text-white">
            Share Link
          </p>
        </button>
      </header>

      <div className="mt-[112px] w-full max-w-[349px] mx-auto py-12 px-14 bg-white rounded-3xl shadow-2xl">
        <div className="w-[104px] h-[104px] mx-auto rounded-full border-4 border-custom-purple-600">
          <Image
            src="/images/thorfinn.webp"
            className="w-full h-full rounded-full"
            width={104}
            height={104}
            alt="User's profile picture"
          />
        </div>

        <div className="mt-6 text-center">
          <h1 className="instrument-sans font-bold text-[32px] text-custom-grey-900">
            Thorfinn
          </h1>
          <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
            thorfinn@example.com
          </p>
        </div>
      </div>
    </main>
    // No responsive yet
  );
}
