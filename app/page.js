import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-custom-grey-50">
      <div className="flex flex-col justify-center items-center gap-12">
        <Image
          src="/images/logo-devlinks-large.svg"
          width={182}
          height={40}
          alt="DevLinks Logo"
          priority
        />

        <form className="bg-white rounded-xl p-10">
          <h1 className="instrument-sans text-custom-grey-900 text-[32px] font-bold">
            Login
          </h1>
          <p className="instrument-sans font-normal text-base text-custom-grey-500">
            Add your details below to get back into the app
          </p>

          <div className="mt-10">
            <label className="instrument-sans font-normal text-xs text-custom-grey-900">
              Email Address
            </label>

            <div className="mt-2 w-[396px] border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icon-email.svg"
                alt="Email Icon"
                width={16}
                height={16}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
