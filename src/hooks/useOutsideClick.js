import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCaptureing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCaptureing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCaptureing]
  );

  return ref;
}
