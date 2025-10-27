"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useDropdown } from "../context/DropDownContext";

export default function LinkFormContainer({ formId, removeForm }) {
  const { getSelectedValue, setSelectedValue, dropDownOptions } = useDropdown();

  const selectedValue = getSelectedValue(formId);

  return (
    <div className="mt-6 p-6 rounded-xl bg-custom-grey-50">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="w-3 h-[1px] bg-custom-grey-500"></div>
            <div className="w-3 h-[1px] bg-custom-grey-500"></div>
          </div>
          <p className="instrument-sans font-bold text-base text-custom-grey-500">
            Link #{formId}
          </p>
        </div>

        <button
          type="button"
          onClick={() => removeForm(formId)}
          className="instrument-sans font-normal text-base text-custom-grey-500 cursor-pointer"
        >
          Remove
        </button>
      </div>

      <div className="mt-4">
        <small className="instrument-sans font-normal text-xs text-custom-grey-900">
          Platform
        </small>
        <Select value={selectedValue || "frontendmentor"} onValueChange={(value) => setSelectedValue(formId, value)}>
          <SelectTrigger className="mt-2 w-full !h-auto rounded-lg border border-custom-grey-200 bg-white p-4">
            <SelectValue
              className="instrument-sans font-normal text-base text-custom-grey-900"
              placeholder="Select Link"
            />
          </SelectTrigger>

          <SelectContent>
            {dropDownOptions.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                <div className="flex justify-start items-center gap-4">
                  <Image
                    src={`/images/${option.fileName}`}
                    width={16}
                    height={16}
                    alt={option.alt}
                  />
                  <span className="instrument-sans font-normal text-base text-custom-grey-900">
                    {option.text}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <small className="instrument-sans font-normal text-xs text-custom-grey-900">
          Link
        </small>
        <div className="mt-2 w-full rounded-lg border border-custom-grey-200 bg-white p-4 flex justify-start items-center gap-4">
          <Image
            src="/images/icon-link.svg"
            width={16}
            height={16}
            alt="Link Icon"
          />
          <input
            type="text"
            id="link"
            name="link"
            className="w-full h-full focus:outline-none"
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
        </div>
      </div>
    </div>
  );
}
