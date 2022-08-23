import React, {ChangeEvent, useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../../store/store';

import {LoadingStatusType} from '../../../store/reducers/appReducer';

import {
	addCardsPack,
	getCardsPacks,
	PackListParamsType,
	setParamsUserId
} from '../../../store/reducers/packListReducer';

import {TablePacks} from './TablePacks';

export const TablePacksContainer = () => {

	// const navigate = useNavigate();
	const dispatch = AppDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);

	const pageCount = useAppSelector<number>(state => state.packList.pageCount);
	const currentPage = useAppSelector<number>(state => state.packList.page);
	const params = useAppSelector<PackListParamsType>(state => state.packList.params);


	const [namePack, setNamePack] = useState<string>('');
	const [sortPacks, setSortPacks] = useState<string>('0updated');

	// const isDelete = useSelector<AppRootStateType, boolean>(state => state.modals.modalDelete);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [titleCard, setTitleCard] = useState<string>('');
	const [titleCardID, setTitleCardID] = useState<string>('');


	// read input value
	const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
	};

	// для добавления карточек Pack
	const onHandlerSubmitPackName = () => {
		if (namePack) {
			dispatch(addCardsPack({name: namePack}));
		}
	};

	useEffect(() => {
		dispatch(getCardsPacks());
	},[pageCount,
		currentPage,
		dispatch,
		params.userId,
		params.min,
		params.max,
		params.packName,
	]);


	// для удаления pack карточек
	// const onClickDeletePack = (action?: 'delete') => {
	// 	if (action === 'delete') dispatch(deleteCardsPack(titleCardID));
	// 	setShowModal(false);
	// 	setTitleCard('');
	// 	setTitleCardID('');
	// };

	// показать модалку удаления
	const showModalDelete = (id: string, titleCard: string) => {
		setTitleCard(titleCard);
		setTitleCardID(id);
		setShowModal(true);
	};

	// навигация на таблицу карточек
	const showCardsPack = (id: string, pageCount: number, name: string) => {
		// (!isLoading) && navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
	};

	const sortTableValue = (value: string) => {
		setSortPacks(0 + value);
	};

	const learnCardsPack = (id: string, name: string) => {
		// dispatch(getLearnCardsPack(id));
		// navigate(`${PATH.LEARN_CARDS}/${name}`);
	};



	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	},[loadingStatus]);


	// set unmount params userId
	useEffect(() => {
		return () => {
			dispatch(setParamsUserId(''));
		};
	}, []);

	return (
		<>
			{/*<div>*/}
			{/*	<input onChange={onChangePackName}*/}
			{/*		   value={namePack}*/}
			{/*		   disabled={isLoading}/>*/}
			{/*	<button onClick={onHandlerSubmitPackName}*/}
			{/*			disabled={isLoading}>*/}
			{/*		add new pack*/}
			{/*	</button>*/}
			{/*</div>*/}
			<TablePacks
				sortTableValue={sortTableValue}
				showModalDelete={showModalDelete}
				showCardsPack={showCardsPack}
				learnCardsPack={learnCardsPack}
				isLoading={isLoading}
			/>
		</>
	);
};