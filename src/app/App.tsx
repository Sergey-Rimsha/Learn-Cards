import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {Common} from './common/Common';
import './App.css';


const App = () => (
	<div className='App'>
		<HashRouter>
			<Provider store={store}>
				<Common />
			</Provider>
		</HashRouter>
		
	</div>
);

export default App;
