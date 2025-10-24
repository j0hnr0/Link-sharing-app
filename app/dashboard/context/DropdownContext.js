"use client";

import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState("");

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
