import React, {ChangeEvent, useCallback, useState} from 'react';

import s from './SearchInput.module.scss';

type SearchInputPropsType = {
	packNameSearch?: string
	setParamsSearch: (packName: string) => void
}


export const SearchInput = React.memo((props: SearchInputPropsType) => {

	const {setParamsSearch, packNameSearch = ''} = props;

	const [searchValue, setSearchValue] = useState<string>(packNameSearch);

	const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	};

	const onSearchData = useCallback(() => {
		setParamsSearch(searchValue);
		// setSearchValue('');
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