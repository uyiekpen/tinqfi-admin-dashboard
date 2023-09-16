import { useState } from "react";
import { Switch } from "@headlessui/react";
import nightModeImage from "../../assets/icon/moon-01.png";
import darkModeImage from "../../assets/icon/sun.png";

export default function ToggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-tinqfiGray" : "bg-white"}
          relative inline-flex h-[40px] w-[150px] shrink-0 cursor-pointer rounded-lg border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[100px] transform rounded-lg bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
         <div className="flex items-center justify-center">
         <div className="h-[28px] flex items-center">
            <img
              src={enabled ? nightModeImage : darkModeImage}
              alt={enabled ? "Night Mode" : "Dark Mode"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-sm font-semibold mr-4">
            {enabled ? "Dark" : "Light"}
          </div>
         </div>
        </span>
      </Switch>
    </div>
  );
}
