import {
	packListReducer,
	PackStateType, setPackList,
	setParamsCardsCount,
	setParamsPage, setParamsSearchPackName,
	setParamsUserId
} from '../store/reducers/packListReducer';


let startState: PackStateType;

beforeEach(() => {
	startState = {
		cardPacks: [{
			cardsCount: 0,
			created: '2022-06-06T19:47:45.032Z',
			deckCover: 'url or base64',
			grade: 0,
			more_id: '62990963ddc3d312d8d3a864',
			name: 'NEW PACK NAME',
			path: '/def',
			private: false,
			rating: 0,
			shots: 0,
			type: 'pack',
			updated: '2022-06-06T19:47:49.718Z',
			user_id: '62990963ddc3d312d8d3a864',
			user_name: 'qwerty1044@mail.ru',
			__v: 0,
			_id: '629e59e17cbffe0004d99dd4',
		}],
		cardPacksTotalCount: 5087,
		maxCardsCount: 103,
		minCardsCount: 0,
		page: 1,
		pageCount: 8,
		token: '27777e20-e5d5-11ec-a71b-af6a6d5de3fe',
		tokenDeathTime: 1655151219458,
		params: {
			userId: '',
			max: 110,
			min: 0,
			packName: '',
		},
	};
});


test('set params page and pageCount', () => {

	const page = 1;
	const pageCount = 10;

	const endState = packListReducer(startState, setParamsPage(pageCount, page));

	expect(endState.page).toBe(page);
	expect(endState.pageCount).toBe(pageCount);
	expect(endState.pageCount).not.toBe(page);

});

test('set state params userId', () => {
	const userId = 'userId_1e2e24aw2q4dr23123';

	const endState = packListReducer(startState, setParamsUserId(userId));

	expect(endState.params.userId).toBe(userId);
});

test('set state params cards count min and max', () => {
	const min = 10;
	const max = 101;

	const endState = packListReducer(startState, setParamsCardsCount(min, max));

	expect(endState.params.min).toBe(min);
	expect(endState.params.max).toBe(max);
	expect(endState.params.max).not.toBe(99);
});

test('set params search pack name', () => {
	const packName = 'sergey learn js and react';

	const endState = packListReducer(startState, setParamsSearchPackName(packName));

	expect(endState.params.packName).toBe(packName);
	expect(endState.params.packName).not.toBe('pack name');
});

test('set data pack list', () => {
	const endState = packListReducer(startState, setPackList(startState));

	expect(endState.cardPacks.length).toBe(1);
	expect(endState.cardPacks[0].name).toBe('NEW PACK NAME');
	expect(endState.params.max).toBe(110);
});