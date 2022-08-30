import React, {ChangeEvent, useState} from 'react';

import s from './DoubleRange.module.scss';

type DoubleRangePropsType = {
	isLoading: boolean
	setParamsRange: (min: number, max: number) => void
}

export const DoubleRange = React.memo((props: DoubleRangePropsType) => {

	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(110);

	const value= [value1, value2];

	const onChangeHandler = (value: number[]) => {
		setValue1(value[0]);
		setValue2(value[1]);
	};

	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = +e.currentTarget.value;
		if (value) {
			if (e.currentTarget.id === 'lower') {
				if (inputValue <= value[1] - 10) {
					onChangeHandler([inputValue, value[1]]);
				}
			} else if (e.currentTarget.id === 'upper') {

				if (inputValue >= value[0] + 10) {
					onChangeHandler([value[0], inputValue]);
				}
			}
		}
	};

	if (value) {
		if (value[0] >= value[1] - 4){
			value[0] = value[1] - 4;
		}
	}

	// по отжатию клавиши мыши отпавляем данные
	const onHandlerSetParams = () => {
		props.setParamsRange(value1, value2);
	};

	return (
		<>
			<div className={s.multiRangeWrap}>
				<div className={s.values}>
					<div className={s.values__item}>{value1}</div>
					<div className={s.values__item}>{value2}</div>
				</div>
				<span className={s.multiRange}>
					<input
						id='lower'
						max={110}
						type='range'
						value={value && value[0]}
						disabled={props.isLoading}
						onMouseOut={onHandlerSetParams}
						onChange={onChangeCallback}
					/>
					<input
						id='upper'
						max={110}
						type='range'
						value={value && value[1]}
						disabled={props.isLoading}
						onMouseOut={onHandlerSetParams}
						onChange={onChangeCallback}
					/>
				</span>
			</div>
		</>

	);
});