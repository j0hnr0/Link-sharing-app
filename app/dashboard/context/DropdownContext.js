"use client";

import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState("");

  const dropDownOptions = [
    {
      id: "codepen",
      fileName: "icon-codepen.svg",
      alt: "CodePen Icon",
      text: "CodePen",
    },
    {
      id: "codewars",
      fileName: "icon-codewars.svg",
      alt: "CodeWars Icon",
      text: "CodeWars",
    },
    {
      id: "devto",
      fileName: "icon-devto.svg",
      alt: "Dev.to Icon",
      text: "Dev.to",
    },
    {
      id: "facebook",
      fileName: "icon-facebook.svg",
      alt: "Facebook Icon",
      text: "Facebook",
    },
    {
      id: "freecodecamp",
      fileName: "icon-freecodecamp.svg",
      alt: "freeCodeCamp Icon",
      text: "freeCodeCamp",
    },
    {
      id: "frontendmentor",
      fileName: "icon-frontend-mentor.svg",
      alt: "Frontend Mentor Icon",
      text: "Frontend Mentor",
    },
    {
      id: "github",
      fileName: "icon-github.svg",
      alt: "GitHub Icon",
      text: "GitHub",
    },
    {
      id: "gitlab",
      fileName: "icon-gitlab.svg",
      alt: "GitLab Icon",
      text: "GitLab",
    },
    {
      id: "hashnode",
      fileName: "icon-hashnode.svg",
      alt: "Hashnode Icon",
      text: "Hashnode",
    },
    {
      id: "linkedin",
      fileName: "icon-linkedin.svg",
      alt: "LinkedIn Icon",
      text: "LinkedIn",
    },
    {
      id: "stackoverflow",
      fileName: "icon-stack-overflow.svg",
      alt: "Stack Overflow Icon",
      text: "Stack Overflow",
    },
    {
      id: "twitch",
      fileName: "icon-twitch.svg",
      alt: "Twitch Icon",
      text: "Twitch",
    },
    {
      id: "twitter",
      fileName: "icon-twitter.svg",
      alt: "Twitter Icon",
      text: "Twitter",
    },
    {
      id: "youtube",
      fileName: "icon-youtube.svg",
      alt: "YouTube Icon",
      text: "YouTube",
    },
  ];

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption, dropDownOptions }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within DropdownProvider");
  }
  return context;
}
