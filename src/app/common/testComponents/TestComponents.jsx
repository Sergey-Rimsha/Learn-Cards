import {SuperInputText} from '../../components/c1-SuperInputText/SuperInputText';
import SuperButton from '../../components/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../components/c3-SuperCheckbox/SuperCheckbox';


export const TestComponents = () => {

	return (
		<div>
			<h2>Test Components</h2>
			<div>
				<SuperInputText/>
			</div>
			<div>
				<SuperButton>
					test
				</SuperButton>
			</div>
			<div>
				<SuperCheckbox>
					remember ME
				</SuperCheckbox>
			</div>
		</div>
	);
};