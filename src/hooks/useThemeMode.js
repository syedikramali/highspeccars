import { usePreference } from "@/store";
import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState("light");
  const { mode } = usePreference();

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  return { isLightMode: themeMode === "light" };
};

export default useThemeMode;
