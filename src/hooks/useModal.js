import { useEffect, useRef, useState } from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(function () {
    function handleClickOutside(e) {
      const isOutsideMenu = !modalContentRef.current?.contains(e.target);
      const isNotButton = !buttonRef.current?.contains(e.target);

      if (isOutsideMenu && isNotButton) setIsModalOpen(false);
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { isModalOpen, setIsModalOpen, buttonRef, modalContentRef };
}
