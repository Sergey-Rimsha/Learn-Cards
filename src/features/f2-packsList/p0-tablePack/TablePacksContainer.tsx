import React, {useCallback, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {AppDispatch, useAppSelector} from '../../../store/store';

import {LoadingStatusType} from '../../../store/reducers/appReducer';

import {delCardsPack, editePackName, getCardsPacks, setParamsUserId} from '../../../store/reducers/packListReducer';

import {PATH} from '../../../app/Routing/Routing';

import {getLearnCardsPack} from '../../../store/reducers/learnCardsReducer';

import {ModalAdded} from '../../../components/c11-ModalAdded/ModalAdded';

import {TablePacks} from './TablePacks';

export type StateRenamePackModal = {
	name: string
	_id: string
	show: boolean
}

export type StateDeletePackModal = {
	name: string
	_id: string
	show: boolean
}

export const TablePacksContainer = React.memo(() => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [sortPacks, setSortPacks] = useState<string>('0updated');
	const [stateRenamePackModal, setStateRenamePackModal] = useState<StateRenamePackModal>({
		name: 'string',
		_id: 'string',
		show: false,
	});

	const [steteDeletePack, setStateDeletePack] = useState<StateDeletePackModal>({
		name: 'string',
		_id: 'string',
		show: false,
	});

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
	const pageCount = useAppSelector<number>(state => state.packList.pageCount);
	const currentPage = useAppSelector<number>(state => state.packList.page);
	const userId = useAppSelector<string>(state => state.packList.params.userId);
	const min = useAppSelector<number>(state => state.packList.params.min);
	const max = useAppSelector<number>(state => state.packList.params.max);
	const packName = useAppSelector<string>(state => state.packList.params.packName);


	// показать модалку удаления
	const onHandlerModalDelete = useCallback((id: string, titleCard: string) => {
		dispatch(delCardsPack(id));
	},[dispatch]);

	// навигация на таблицу карточек
	const showCardsPack = useCallback((id: string, name: string) => {
		// (!isLoading) && navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
		navigate(`${PATH.packName}/${name}/${id}`);
	},[navigate]);

	const sortTableValue = (value: string) => {
		setSortPacks(0 + value);
	};

	const learnCardsPack = useCallback((id: string, name: string) => {
		dispatch(getLearnCardsPack(id));
		navigate(`${PATH.learnCards}/${name}`);
	},[dispatch, navigate]);

	// open modal and save state _id pack and OldName
	const openModalRenamePack = (params: StateRenamePackModal) => {
		setStateRenamePackModal({...params});
	};

	// rename Pack
	const renamePack = (name: string) => {
		dispatch(editePackName({_id: stateRenamePackModal._id, name}));
		onShowEditeModal(false);
	};

	//show edite Modal rename Pack
	const onShowEditeModal = (show: boolean) => {
		setStateRenamePackModal({...stateRenamePackModal, show});
	};

	useEffect(() => {
		dispatch(getCardsPacks());
	},[pageCount, currentPage, dispatch, userId, min, max, packName]);

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
			{
				!stateRenamePackModal.show ||
                <ModalAdded
                    title={'Rename pack'}
                    name={stateRenamePackModal.name}
                    onSubmitName={renamePack}
                    onShowModal={onShowEditeModal}
                />
			}
			<TablePacks
				isLoading={isLoading}
				sortTableValue={sortTableValue}
				onHandlerModalDelete={onHandlerModalDelete}
				showCardsPack={showCardsPack}
				learnCardsPack={learnCardsPack}
				openModalRenamePack={openModalRenamePack}
			/>
		</>
	);
});