import { quotePicker } from "../functions/quotePicker.js";
import { colorPicker } from "../functions/colorPicker.js";
import * as actionTypesVariables from "../actionTypesVariables.js";

export const quoteAction = () => {
	return {
		type: actionTypesVariables.NEWQUOTE,
		index: quotePicker(),
		colorNum: colorPicker(),
	};
};
