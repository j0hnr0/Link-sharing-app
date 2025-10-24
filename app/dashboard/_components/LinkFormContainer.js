import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function LinkFormContainer({ formId, removeForm }) {
  const dropDownOptions = [
    {
      fileName: "icon-codepen.svg",
      alt: "CodePen Icon",
      text: "CodePen",
    },
    {
      fileName: "icon-codewars.svg",
      alt: "CodeWars Icon",
      text: "CodeWars",
    },
    {
      fileName: "icon-devto.svg",
      alt: "Dev.to Icon",
      text: "Dev.to",
    },
    {
      fileName: "icon-facebook.svg",
      alt: "Facebook Icon",
      text: "Facebook",
    },
    {
      fileName: "icon-freecodecamp.svg",
      alt: "freeCodeCamp Icon",
      text: "freeCodeCamp",
    },
    {
      fileName: "icon-frontend-mentor.svg",
      alt: "Frontend Mentor Icon",
      text: "Frontend Mentor",
    },
    {
      fileName: "icon-github.svg",
      alt: "GitHub Icon",
      text: "GitHub",
    },
    {
      fileName: "icon-gitlab.svg",
      alt: "GitLab Icon",
      text: "GitLab",
    },
    {
      fileName: "icon-hashnode.svg",
      alt: "Hashnode Icon",
      text: "Hashnode",
    },
    {
      fileName: "icon-linkedin.svg",
      alt: "LinkedIn Icon",
      text: "LinkedIn",
    },
    {
      fileName: "icon-stack-overflow.svg",
      alt: "Stack Overflow Icon",
      text: "Stack Overflow",
    },
    {
      fileName: "icon-twitch.svg",
      alt: "Twitch Icon",
      text: "Twitch",
    },
    {
      fileName: "icon-twitter.svg",
      alt: "Twitter Icon",
      text: "Twitter",
    },
    {
      fileName: "icon-youtube.svg",
      alt: "YouTube Icon",
      text: "YouTube",
    },
  ];

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
        <Select defaultValue="1">
          <SelectTrigger className="mt-2 w-full !h-auto rounded-lg border border-custom-grey-200 bg-white p-4">
            <SelectValue
              className="instrument-sans font-normal text-base text-custom-grey-900"
              placeholder="Select Link"
            />
          </SelectTrigger>

          <SelectContent>
            {dropDownOptions.map((option, index) => (
              <SelectItem key={index} value={index.toString()}>
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
