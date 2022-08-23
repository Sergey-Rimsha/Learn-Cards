import {ChangeEvent, useState} from 'react';

import s from './SearchInput.module.scss';

type SearchInputPropsType = {
	setParamsSearch: (packName: string) => void
}


export const SearchInput = (props: SearchInputPropsType) => {
	
	const [searchValue, setSearchValue] = useState<string>('');


	const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	};

	const onSearchData = () => {
		props.setParamsSearch(searchValue);
		setSearchValue('');
	};

		
	return (
		<div className={s.inputBox}>
			<input
				className={s.inputBox__input}
				placeholder={'Search...'}
				type={'search'}
				value={searchValue}
				onChange={onHandlerChange}
				onBlur={onSearchData}
			/>
		</div>
	);
};