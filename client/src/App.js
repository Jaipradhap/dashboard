import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/dashboard"
						element={
							
								<Dashboard />
							
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
