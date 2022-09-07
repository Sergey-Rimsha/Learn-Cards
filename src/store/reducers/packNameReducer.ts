import {AppThunkType} from '../store';

import {apiCard, GetCardsCardParamsType, PostCardParamsType} from '../../api/Api';

import {setLoadingStatus} from './appReducer';


export type CardPackNameType = {
	answer: string
	question: string
	comments: string
	cardsPack_id: string
	grade: number
	shots: number
	user_id: string
	created: string
	updated: string
	_id: string
}

export type PackNameStateType = {
	cards: CardPackNameType[]
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
	packUserId: string
}

export type PackNameActionType = ReturnType<typeof setPackNameList>
	| ReturnType<typeof setParamsPackNamePagination>

const initialState: PackNameStateType = {
	cards: [],
	cardsTotalCount: 10,
	maxGrade: 6,
	minGrade: 0,
	page: 1,
	pageCount: 8,
	packUserId: '',
};

export const packNameReducer = (state = initialState, acton: PackNameActionType): PackNameStateType => {
	switch (acton.type) {
		case 'PACK-NAME/SET-PACK_NAME': {
			return {
				...state,
				...acton.data,
			};
		}
		case 'PACK-NAME/SET-PARAMS_PAGINATION': {
			return  {
				...state,
				pageCount: acton.pageCount,
				page: acton.currentPage,
			};
		}


		default:
			return state;
	}
};


export const setPackNameList = (data: PackNameStateType) => {
	return {
		type: 'PACK-NAME/SET-PACK_NAME',
		data,
	} as const;
};

export const setParamsPackNamePagination = (pageCount: number, currentPage: number) => {
	return {
		type: 'PACK-NAME/SET-PARAMS_PAGINATION',
		pageCount,
		currentPage,
	} as const;
};

export const getCards = (paramsData?: GetCardsCardParamsType): AppThunkType => ( dispatch, getState) => {
	dispatch(setLoadingStatus('loading'));

	const {pageCount, page} = getState().packName;

	const params = {...paramsData, pageCount, page};

	apiCard.getCardsPack(params)
		.then((res) => {
			dispatch(setPackNameList(res.data));
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};


export const postNewCard = (params: PostCardParamsType):AppThunkType => (dispatch) => {
	dispatch(setLoadingStatus('loading'));

	const cardsPack_id = params.cardsPack_id;

	apiCard.postNewCard(params)
		.then((res) => {
			dispatch(getCards({cardsPack_id}));
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};


export const removeCard = (id: string, packId: string): AppThunkType => (dispatch) => {
	dispatch(setLoadingStatus('loading'));

	apiCard.removeCard(id)
		.then((res) => {
			// console.log(res);
			dispatch(getCards({cardsPack_id: packId}));
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};

export const updateCard = (params: PostCardParamsType): AppThunkType => (dispatch) => {
	dispatch(setLoadingStatus('loading'));

	apiCard.updateCard(params)
		.then((res) => {
			dispatch(getCards({cardsPack_id: params.cardsPack_id}));
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};


