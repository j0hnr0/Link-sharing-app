"use client";

import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ProfileImageSkeleton from "./ProfileImageSkeleton";

export default function ProfileImageUpload({
  onImageUpload,
  initialImage,
  isPending,
}) {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (initialImage) {
      setProfileImage(initialImage);
    }
  }, [initialImage]);

  const uploadMutation = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      return data;
    },
    onSuccess: (data) => {
      setProfileImage(data.imageUrl);
      onImageUpload(data.imageUrl);
      toast.success("Image uploaded succesfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to upload image");
    },
  });

  function handleFileClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return;
    }

    uploadMutation.mutate(file);
  }

  return (
    <div className="mt-10 w-full p-6 bg-custom-grey-50 rounded-[12px]">
      <div
        className="flex justify-between items-center
              max-custom-lg:gap-2.5
              max-custom-md:gap-0
              max-custom-semism:flex-col max-custom-semism:justify-start max-custom-semism:items-start"
      >
        <p className="instrument-sans font-normal text-base text-custom-grey-500">
          Profile picture
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div
          onClick={handleFileClick}
          className="relative w-full max-w-48 h-48 bg-custom-grey-100 cursor-pointer overflow-hidden
    max-custom-semism:h-[150px] max-custom-semism:max-w-[150px] max-custom-semism:mt-4"
        >
          {isPending ? (
            <ProfileImageSkeleton />
          ) : profileImage ? (
            <Image
              src={profileImage}
              fill
              className="object-cover"
              alt="Profile"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-[60px] max-custom-semism:py-[39px]">
              <Image
                src="/images/icon-upload-image.svg"
                width={40}
                height={40}
                alt="Upload Image Icon"
              />
              <p className="mt-2 text-center instrument-sans font-semibold text-base text-custom-purple-600">
                {uploadMutation.isPending ? "Uploading..." : "+ Upload Image"}
              </p>
            </div>
          )}
        </div>

        <p
          className="instrument-sans font-normal text-xs text-custom-grey-500
                max-custom-semism:mt-6"
        >
          Image must be below 1024x1024px <br />
          Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
