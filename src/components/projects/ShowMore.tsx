import React, { useState, useRef, useEffect } from "react";

interface ShowMoreProps {
  description: string;
  maxLength?: number;
}

const ShowMore: React.FC<ShowMoreProps> = ({ description, maxLength = 120 }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isLong = description.length > maxLength;

  useEffect(() => {
    if (!show) return;
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div
      ref={ref}
      className="mt-2 text-gray-700 dark:text-gray-400 cursor-pointer"
      onClick={() => show && setShow(false)}
    >
      {show || !isLong
        ? description
        : description.slice(0, maxLength) + "..."}
      {isLong && (
        <button
          className="ml-2 text-blue-500 underline text-xs"
          type="button"
          onClick={(e) => { e.stopPropagation(); setShow((v) => !v); }}
        >
          {show ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
