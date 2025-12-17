"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import NameSkeleton from "./_components/NameSkeleton";
import { dropDownOptions } from "@/app/lib/platformData";

export default function Preview() {
  const { data: linksData, isPending: linksPending } = useQuery({
    queryKey: ["linksPreview"],
    queryFn: async () => {
      const response = await fetch("/api/links/get");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch links");
      }

      return data;
    },
  });

  const links = linksData?.links || [];

  const { data: profileInfo, isPending } = useQuery({
    queryKey: ["profilePreview"],
    queryFn: async () => {
      const response = await fetch("/api/profile-details/get");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch the profile info");
      }

      return data;
    },
  });

  return (
    <main className="p-6">
      <div
        className="absolute -z-50 top-0 left-0 right-0 w-full h-[357px] rounded-b-4xl bg-custom-purple-600
      max-custom-semism:hidden"
      ></div>

      <header
        className="w-full p-4 rounded-[12px] bg-white flex justify-between
      max-custom-sm:px-0 max-custom-sm:gap-4"
      >
        <Link
          href="/dashboard/links"
          className="w-full max-w-[153px] bg-transparent py-4 rounded-[8px] border border-custom-purple-600 text-center active:bg-custom-grey-100
          max-custom-sm:max-w-none"
        >
          <p className="instrument-sans font-semibold text-base text-custom-purple-600">
            Back to Editor
          </p>
        </Link>

        <button
          type="button"
          className="w-full max-w-[127px] bg-custom-purple-600 rounded-[8px] py-4 text-center
          max-custom-sm:max-w-none"
        >
          <p className="instrument-sans font-semibold text-base text-white">
            Share Link
          </p>
        </button>
      </header>

      <div
        className="mt-[112px] w-full max-w-[349px] mx-auto py-12 px-14 bg-white rounded-3xl shadow-2xl
      max-custom-semism:mt-[50px] max-custom-semism:shadow-none max-custom-semism:py-0"
      >
        <div className="w-[104px] h-[104px] mx-auto rounded-full border-4 border-custom-purple-600">
          {isPending ? (
            <div className="w-full h-full rounded-full bg-gray-200 animate-pulse"></div>
          ) : profileInfo?.profileImage ? (
            <Image
              src={profileInfo.profileImage}
              className="w-full h-full rounded-full"
              width={104}
              height={104}
              alt="User's profile picture"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {isPending ? (
          <NameSkeleton />
        ) : (
          <div className="mt-6 text-center">
            <h1 className="instrument-sans font-bold text-[32px] text-custom-grey-900">
              {profileInfo?.firstName || "No"} {profileInfo?.lastName || "name"}
            </h1>
            <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
              {profileInfo?.email || "No email provided"}
            </p>
          </div>
        )}

        <ul className="mt-[32px]">
          {linksPending || links.length === 0
            ? Array(3)
                .fill(null)
                .map((_, index) => (
                  <li
                    key={index}
                    className="mt-6 w-full h-[56px] rounded-[8px] bg-custom-grey-100"
                  ></li>
                ))
            : links.map((link) => {
                const platformInfo = dropDownOptions.find(
                  (option) => option.id === link.platform
                );

                return (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: platformInfo?.color }}
                      className="mt-6 w-full h-[56px] rounded-[8px] flex items-center justify-between px-4 text-white cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/images/${platformInfo?.fileName}`}
                          width={20}
                          height={20}
                          alt={platformInfo?.alt || link.platform}
                          className="brightness-0 invert"
                        />
                        <span className="instrument-sans text-base font-normal text-white">
                          {platformInfo?.text || link.platform}
                        </span>
                      </div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.66669 8H13.3334M13.3334 8L8.00002 2.66667M13.3334 8L8.00002 13.3333"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                );
              })}
        </ul>
      </div>
    </main>
  );
}
