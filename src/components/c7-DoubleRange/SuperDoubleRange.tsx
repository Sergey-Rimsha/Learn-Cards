import React, {ChangeEvent} from 'react';

import s from './SuperDoubleRange.module.scss';

type SuperDoubleRangePropsType = {
	onChangeRange?: (value: [number, number]) => void
	value?: [number, number]
	// min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
	{
		onChangeRange,
		value,
		// min, max, step, disable, ...
	},
) => {
	// сделать самому, можно подключать библиотеки

	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = +e.currentTarget.value;
		if (value) {
			if (e.currentTarget.id === 'lower') {
				if (inputValue <= value[1] - 4) {
					onChangeRange && onChangeRange([inputValue, value[1]]);
				}
			} else if (e.currentTarget.id === 'upper') {

				if (inputValue >= value[0] + 4) {
					onChangeRange && onChangeRange([value[0], inputValue]);
				}
			}
		}
	};

	if (value) {
		if (value[0] >= value[1] - 4){
			value[0] = value[1] - 4;
		}
	}

	return (
		<div className={s.multiRangeWrap}>
            <span className={s.rangeWrap}>
			    <input
				    type='range'
				    value={value && value[0]}
				    onChange={onChangeCallback}
				    id='lower'/>
			    <input
				    type='range'
				    value={value && value[1]}
				    onChange={onChangeCallback}
				    id='upper'/>
			</span>
		</div>
	);
};

export default SuperDoubleRange;
