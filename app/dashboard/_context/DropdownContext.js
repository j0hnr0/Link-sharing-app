"use client";

import { dropDownOptions } from "@/app/lib/platformData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [formSelections, setFormSelections] = useState({});
  const [formUrls, setFormUrls] = useState({});
  const [forms, setForms] = useState([]);
  const [nextId, setNextId] = useState(1);
  const queryClient = useQueryClient();

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
      toast.success("Links saved successfully!");
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
