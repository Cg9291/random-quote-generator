import { colorPicker } from "../functions/colorPicker.js";

export const colorAction = () => {
	return {
		type: "NEWCOLOR",
		colorNum: colorPicker(),
	};
};
