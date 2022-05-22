import {SuperInput} from '../../components/c1-SuperInputText/SuperInput';
import SuperButton from '../../components/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../components/c3-SuperCheckbox/SuperCheckbox';

import s from './TestComponent.module.scss';


export const TestComponents = () => {

	return (
		<div className={s.block}>
			<h2>Test Components</h2>
			<div className={s.block__item}>
				<SuperInput/>
			</div>
			<div className={s.block__item}>
				<SuperInput error={'error'}/>
			</div>
			<div className={s.block__item}>
				<SuperButton>
					test
				</SuperButton>
			</div>
			<div className={s.block__item}>
				<SuperButton red={true}>
					test
				</SuperButton>
			</div>
			<div className={s.block__item}>
				<SuperCheckbox>
					remember Me
				</SuperCheckbox>
			</div>
		</div>
	);
};