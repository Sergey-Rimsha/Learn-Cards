import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from '../store/store';

import './App.css';

import {Routing} from './Routing/Routing';


const App = () => {

	return (
		<div className='App'>
			<HashRouter>
				<Provider store={store}>
					{/*<Common />*/}
					<Routing/>
				</Provider>
			</HashRouter>

		</div>
	);

};

export default App;



