import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox.js";
import { useSelector } from "react-redux";
import { themeColors } from "./redux/objects/colors.js";

export default function App() {
  const colorID = useSelector((state) => state.colorPickerReducer.color);
  const [themeColor, setThemeColor] = useState(themeColors[colorID]);

  return (
    <div
      className="App bgColorTransition transition-[background-color:2s] flex h-screen w-screen items-center justify-center overflow-hidden transition-[background-color] duration-700 "
      style={{ backgroundColor: themeColor }}
    >
      <QuoteBox
        themeColor={themeColor}
        setThemeColor={setThemeColor}
        colorID={colorID}
      />
    </div>
  );
}
