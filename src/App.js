//import "./App.scss";
import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox.js";
import { useSelector } from "react-redux";
import { themeColors } from "./redux/objects/colors.js";

export default function App() {
  const colorID = useSelector((state) => state.colorPickerReducer.color);
  const [themeColor, setThemeColor] = useState(themeColors[colorID]);

  return (
    <div
      className="App bgColorTransition flex h-screen w-screen items-center justify-center overflow-hidden "
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
