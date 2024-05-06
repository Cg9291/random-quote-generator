//import "./App.scss";
import QuoteBox from "./components/QuoteBox.js";

export default function App() {
	return (
		<div className="App w-screen h-screen flex justify-center items-center overflow-hidden bg-indigo-600 rounded-xl .bgColorTransition">
			<QuoteBox />
		</div>
	);
}
