import React, {ChangeEvent, useState} from 'react';

import {useNavigate} from 'react-router-dom';

// import {AppDispatch} from '../../../store/store';

import {AppDispatch} from '../../../store/store';

import {loginUserTC} from '../../../store/reducers/authReducer';

import {Login} from './login';



export const LoginContainer = () => {

	const navigate = useNavigate();

	const dispatch = AppDispatch();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	// const [activeBtn, setActiveBtn] = useState<boolean>(false);

	// const activeLoginBtn = useSelector<AppRootStateType, boolean>(state => state.auth.activeLoginBtn);
	// const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

	//
	// useEffect(() => {
	// 	if (isAuth) navigate(PATH.PROFILE);
	// },[isAuth, navigate]);

	// редирект на если забыли пароль
	const redirectLink = () => {
		// navigate(PATH.RECOVERY);
	};

	const navigateRegistration = () => {
		// navigate(PATH.REGISTRATION);
	};

	// слушаем импут email и записывает в setState
	const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	// слушаем checked input remember Me
	const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
		setRememberMe(e.currentTarget.checked);
	};


	// слушаем импут password и записывает в setState
	const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	// слушаем событие на кнопке onClick и отправляем password and email
	const onSubmitHandler = () => {
		// validate data email password
		if (email.length > 5 && password.length > 7) {

			// упакавали в obj email password rememberMe
			const data = {email, password, rememberMe};
			// dispatch ThunkCreator
			dispatch(loginUserTC(data));
		}
	};

	return (
		<>
			<Login
				email={email}
				password={password}
				activeLoginBtn={false}
				rememberMe={rememberMe}
				onChangeChecked={onChangeChecked}
				onChangeHandlerEmail={onChangeHandlerEmail}
				onChangeHandlerPassword={onChangeHandlerPassword}
				onSubmitHandler={onSubmitHandler}
				redirectLink={redirectLink}
				navigateRegistration={navigateRegistration}
			/>
		</>
	);
};

