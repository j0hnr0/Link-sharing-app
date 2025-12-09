"use client";

import EditorContainer from "../_components/EditorContainer";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import ProfileImageUpload from "./_components/ProfileImageUpload";
import ProfileInformation from "./_components/ProfileInformation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: profileInfo, isPending } = useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () => {
      const response = await fetch("/api/profile-details/get");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch the profile info");
      }

      return data;
    },
  });

  useEffect(() => {
    if (profileInfo?.profileImage) {
      setProfileImageUrl(profileInfo.profileImage);
    }
  }, [profileInfo]);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch("/api/profile-details/upsert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create profile");
      }

      return data;
    },
    onSuccess: () => {
      toast.success("Profile saved successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong!");
    },
  });

  function handleForm(data) {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      profileImage: profileImageUrl,
    };

    mutation.mutate(formData);
  }

  return (
    <EditorContainer>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-[60%]
          max-custom-md:w-full"
        noValidate
      >
        <div
          className="bg-white rounded-t-xl p-10
            max-custom-semism:p-6"
        >
          <h1
            className="instrument-sans font-bold text-[32px] text-custom-grey-900
              max-custom-semism:text-2xl"
          >
            Profile Details
          </h1>
          <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
            Add your details to create a personal touch to your profile.
          </p>

          <ProfileImageUpload
            onImageUpload={setProfileImageUrl}
            initialImage={profileImageUrl}
            isPending={isPending}
          />
          <ProfileInformation
            register={register}
            errors={errors}
            profileInfo={profileInfo}
            isPending={isPending}
          />
        </div>

        <div
          className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
            max-custom-semism:p-4"
        >
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={clsx(
                "w-[85px] rounded-lg py-4 text-center max-custom-semism:w-full",
                {
                  "bg-custom-purple-600 cursor-pointer": !mutation.isPending,
                  "bg-custom-purple-300 cursor-not-allowed shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]":
                    mutation.isPending,
                }
              )}
            >
              <span className="instrument-sans font-semibold text-base text-white">
                {mutation.isPending ? "Saving..." : "Save"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </EditorContainer>
  );
}
