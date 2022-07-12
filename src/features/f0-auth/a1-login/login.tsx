import React from 'react';

import {FormikTouched} from 'formik/dist/types';

import {TextField} from '../../../components/c4-Textfield/TextField';

import SuperCheckbox from '../../../components/c3-SuperCheckbox/SuperCheckbox';

import s from './login.module.scss';
import {FormikLoginErrorType, FormikStateType} from './LoginContainer';

type LoginPropsType = {
	formikValue: FormikStateType
	formikErrors: FormikLoginErrorType
	formikTouched: FormikTouched<FormikStateType>
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	redirectLink: () => void
	navigateRegistration: () => void
}

export const Login = (props: LoginPropsType) => {

	return (
		<section className={s.blockLogin}>
			<div className={s.login}>
				<h2 className={s.login__logo}>It-incubator</h2>
				<form className={s.form} onSubmit={props.handleSubmit}>
					<h3 className={s.form__title}>Sign In</h3>

					<div className={s.form__group}>
						<TextField
							id='email'
							name='email'
							label='email'
							type='text'
							value={props.formikValue.email}
							onChange={props.handleChange}
						/>
					</div>

					{
						props.formikTouched.email &&
						props.formikErrors.email &&
						<span className={s.form__errorMessage}>
							{props.formikErrors.email}
						</span>
					}

					<div className={s.form__group}>
						<TextField
							id='password'
							name='password'
							type='password'
							label='password'
							value={props.formikValue.password}
							onChange={props.handleChange}
						/>
					</div>

					{
						props.formikTouched.email &&
						props.formikErrors.password &&
						<span className={s.form__errorMessage}>
							{props.formikErrors.password}
						</span>
					}

					<div className={s.form__group}>
						<SuperCheckbox
							id='toggle'
							name='toggle'
							type='checkbox'
							checked={props.formikValue.toggle}
							onChange={props.handleChange}
						>
							remember Me
						</SuperCheckbox>
					</div>

					<div className={s.form__forgot}>
						<span onClick={props.redirectLink}>Forgot Password</span>
					</div>

					{/*показываем ошибку если отправка api не удалась*/}
					<span className={s.form__errorMessage}>
						{props.formikErrors.loginError}
					</span>

					<div className={s.form__buttonWrap}>
						<button
							className={s.form__button}
							type='submit'>
							Login
						</button>
					</div>
				</form>
				<div className={s.login__quest}>
					Don’t have an account?
				</div>
				<div
					className={s.login__subTitle}
					onClick={props.navigateRegistration}>
					Sign Up
				</div>
			</div>
		</section>
	);
};