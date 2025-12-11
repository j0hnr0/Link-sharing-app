"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [formSelections, setFormSelections] = useState({});
  const [formUrls, setFormUrls] = useState({});
  const [forms, setForms] = useState([]);
  const [nextId, setNextId] = useState(1);
  const queryClient = useQueryClient();

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

  const { data: linksData, isPending } = useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const response = await fetch("/api/links/get");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch links");
      }

      return data;
    },
  });

  useEffect(() => {
    if (linksData?.links) {
      const loadedForms = [];
      const loadedSelections = {};
      const loadedUrls = {};
      let maxId = 0;

      linksData.links.forEach((link) => {
        const formId = link.order + 1;
        loadedForms.push({ id: formId });
        loadedSelections[formId] = link.platform;
        loadedUrls[formId] = link.url;
        maxId = Math.max(maxId, formId);
      });

      setForms(loadedForms);
      setFormSelections(loadedSelections);
      setFormUrls(loadedUrls);
      setNextId(maxId + 1);
    }
  }, [linksData]);

  const saveLinksMutation = useMutation({
    mutationFn: async (links) => {
      const response = await fetch("/api/links/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ links }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save links");
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const saveLinks = () => {
    const linksToSave = forms.map((form, index) => ({
      platform: formSelections[form.id] || "frontendmentor",
      url: formUrls[form.id] || "",
      order: index,
    }));

    saveLinksMutation.mutate(linksToSave);
  };

  const addForm = () => {
    setForms([...forms, { id: nextId }]);
    setNextId(nextId + 1);
  };

  const removeForm = (idToRemove) => {
    setForms(forms.filter((form) => form.id !== idToRemove));
    const { [idToRemove]: _, ...restselections } = formSelections;
    const { [idToRemove]: __, ...restUrls } = formUrls;
    setFormSelections(restselections);
    setFormUrls(restUrls);
  };

  const setSelectedValue = (formId, value) => {
    setFormSelections((prev) => ({
      ...prev,
      [formId]: value,
    }));
  };

  const getSelectedValue = (formId) => {
    return formSelections[formId] || "";
  };

  const setUrlValue = (formId, url) => {
    setFormUrls((prev) => ({
      ...prev,
      [formId]: url,
    }));
  };

  const getUrlValue = (formId) => {
    return formUrls[formId] || "";
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
        setUrlValue,
        getUrlValue,
        dropDownOptions,
        getAllSelections,
        forms,
        addForm,
        removeForm,
        saveLinks,
        isPending,
        isSaving: saveLinksMutation.isPending,
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
