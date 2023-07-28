import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { NotesListPage } from "./containers";
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NotesListPage />
			</div>
		</Provider>
	);
}

export default App;
