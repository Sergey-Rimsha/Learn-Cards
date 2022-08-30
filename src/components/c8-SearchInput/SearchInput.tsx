import React, {ChangeEvent, useCallback, useState} from 'react';

import s from './SearchInput.module.scss';

type SearchInputPropsType = {
	setParamsSearch: (packName: string) => void
}


export const SearchInput = React.memo((props: SearchInputPropsType) => {

	const {setParamsSearch} = props;

	const [searchValue, setSearchValue] = useState<string>('');

	const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	};

	const onSearchData = useCallback(() => {
		setParamsSearch(searchValue);
		setSearchValue('');
	},[setParamsSearch, searchValue]);

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
});