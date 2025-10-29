"use client";

import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [formSelections, setFormSelections] = useState({});

  const dropDownOptions = [
    {
      id: "codepen",
      fileName: "icon-codepen.svg",
      alt: "CodePen Icon",
      text: "CodePen",
      color: "#000000",
    },
    {
      id: "codewars",
      fileName: "icon-codewars.svg",
      alt: "CodeWars Icon",
      text: "CodeWars",
      color: "#8A1A50",
    },
    {
      id: "devto",
      fileName: "icon-devto.svg",
      alt: "Dev.to Icon",
      text: "Dev.to",
      color: "#333333",
    },
    {
      id: "facebook",
      fileName: "icon-facebook.svg",
      alt: "Facebook Icon",
      text: "Facebook",
      color: "#1877F2",
    },
    {
      id: "freecodecamp",
      fileName: "icon-freecodecamp.svg",
      alt: "freeCodeCamp Icon",
      text: "freeCodeCamp",
      color: "#302267",
    },
    {
      id: "frontendmentor",
      fileName: "icon-frontend-mentor.svg",
      alt: "Frontend Mentor Icon",
      text: "Frontend Mentor",
      color: "#3F54A3",
    },
    {
      id: "github",
      fileName: "icon-github.svg",
      alt: "GitHub Icon",
      text: "GitHub",
      color: "#181717",
    },
    {
      id: "gitlab",
      fileName: "icon-gitlab.svg",
      alt: "GitLab Icon",
      text: "GitLab",
      color: "#FC6D26",
    },
    {
      id: "hashnode",
      fileName: "icon-hashnode.svg",
      alt: "Hashnode Icon",
      text: "Hashnode",
      color: "#2962FF",
    },
    {
      id: "linkedin",
      fileName: "icon-linkedin.svg",
      alt: "LinkedIn Icon",
      text: "LinkedIn",
      color: "#0A66C2",
    },
    {
      id: "stackoverflow",
      fileName: "icon-stack-overflow.svg",
      alt: "Stack Overflow Icon",
      text: "Stack Overflow",
      color: "#F58025",
    },
    {
      id: "twitch",
      fileName: "icon-twitch.svg",
      alt: "Twitch Icon",
      text: "Twitch",
      color: "#9146FF",
    },
    {
      id: "twitter",
      fileName: "icon-twitter.svg",
      alt: "Twitter Icon",
      text: "Twitter",
      color: "#1DA1F2",
    },
    {
      id: "youtube",
      fileName: "icon-youtube.svg",
      alt: "YouTube Icon",
      text: "YouTube",
      color: "#FF0000",
    },
  ];

  const setSelectedValue = (formId, value) => {
    setFormSelections((prev) => ({
      ...prev,
      [formId]: value,
    }));
  };

  const getSelectedValue = (formId) => {
    return formSelections[formId] || "";
  };

  const getAllSelections = (formIds) => {
    return formIds
      .map((formId) => {
        const selectedId = formSelections[formId];
        if (!selectedId) return null;

        const platform = dropDownOptions.find((opt) => opt.id === selectedId);
        return {
          formId,
          ...platform,
        };
      })
      .filter(Boolean);
  };

  return (
    <DropdownContext.Provider
      value={{
        setSelectedValue,
        getSelectedValue,
        dropDownOptions,
        getAllSelections,
      }}
    >
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
