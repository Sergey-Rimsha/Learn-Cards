import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from '../store/store';

import {Routing} from './Routing/Routing';


const App = () => {

	return (
		<>
			<HashRouter>
				<Provider store={store}>
					{/*<Common />*/}
					<Routing/>
				</Provider>
			</HashRouter>

		</>
	);

};

export default App;



