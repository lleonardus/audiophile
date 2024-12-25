import { useEffect, useRef, useState } from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(function () {
    function handleClickOutside(e: MouseEvent) {
      const isOutsideMenu = !modalContentRef.current?.contains(
        e.target as Node,
      );
      const isNotButton = !buttonRef.current?.contains(e.target as Node);

      if (isOutsideMenu && isNotButton) setIsModalOpen(false);
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { isModalOpen, setIsModalOpen, buttonRef, modalContentRef };
}
