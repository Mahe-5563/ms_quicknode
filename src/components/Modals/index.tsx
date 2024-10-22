import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type ModalsProps = {
  children: React.ReactNode,
  show_modal?: boolean,
  setShow_modal: Dispatch<SetStateAction<boolean>>
}

export default function Modals({ 
  children,
  // show_modal,
  setShow_modal,
}: ModalsProps) {
  
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkClick = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as HTMLElement)) setShow_modal(false);
    }
    document.addEventListener("click", checkClick);
    return () => document.removeEventListener("click", checkClick);
  }, [])
  

  return (
    <div className="absolute z-50" aria-labelledby="modal-title" role="dialog" aria-modal="false">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div ref={ref} id="modal-body" className="relative transform text-left shadow-xl transition-all md:my-8 md:w-7/12">
            <button 
              className="absolute text-xs right-0 -top-8 px-2 py-1 rounded-full border bg-transparent text-zinc-300 border-zinc-300"
              onClick={() => setShow_modal(false)}
            >
              X
            </button>
            {/* Main Body */}
            <div className="p-6 bg-white max-h-96 overflow-auto text-black dark:bg-zinc-800 dark:text-white rounded-2xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
