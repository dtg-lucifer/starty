"use client";

import { toast as Toast } from "sonner";

function useToast() {
  const ok = (msg: string) => {
    return Toast(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const success = (msg: string) => {
    return Toast.success(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const error = (msg: string) => {
    return Toast.error(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const warn = (msg: string) => {
    return Toast.warning(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const loading = (msg: string) => {
    return Toast.loading(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const info = (msg: string) => {
    return Toast.info(msg, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
    });
  };

  const custom = (
    el: (id: number | string) => React.ReactElement,
    options: any,
  ) => {
    return Toast.custom(el, {
      richColors: true,
      icon: true,
      closeButton: true,
      position: "top-right",
      ...options,
    });
  };

  const dismiss = (id: string) => {
    return Toast.dismiss(id);
  };

  return {
    ok,
    success,
    error,
    warn,
    loading,
    info,
    custom,
    dismiss,
  };
}

export { useToast };
