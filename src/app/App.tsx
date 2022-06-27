import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from '../store/store';
import {Common} from '../common/Common';

import './App.css';
import {HeaderContainer} from '../common/header/HeaderContainer';

import {Routing} from './Routing/Routing';


const App = () => (
	<div className='App'>
		<HashRouter>
			<Provider store={store}>
				{/*<Common />*/}
				<HeaderContainer/>
				<Routing/>
			</Provider>
		</HashRouter>
		
	</div>
);

export default App;
