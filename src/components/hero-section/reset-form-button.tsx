"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const ResetFormButton = () => {
  const router = useRouter();

  const resetForm = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;
    const input = document.getElementById("search-input") as HTMLInputElement;

    if (form && input) {
      form.reset();

      input.value = "";

      router.push("/");
    }
  };

  return (
    <Button
      type="button"
      className="bg-foreground p-6 rounded-full reset-btn"
      onClick={resetForm}
      aria-label="Reset search"
      variant={"default"}
      size={"icon"}
    >
      <X className="size-6" />
    </Button>
  );
};

export default ResetFormButton;
