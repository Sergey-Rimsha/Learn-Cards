
import React, {useState} from 'react';

import s from './Profile.module.scss';
import {ProfileForm} from './ProfileForm';

type ProfilePropsType = {
	editMode: boolean
	onClickEditMode: (edit: boolean) => void
}

export const Profile = (props: ProfilePropsType) => {

	const {editMode, onClickEditMode} = props;

	const onEditButton = () => {
		console.log('sdasd');
		onClickEditMode(true);
	};

	return (
		<div className={s.block}>
			<section className={s.profile}>
				<div className={s.profile__title}>
					Personal Information
				</div>
				<div className={s.profile__ava}>
					<img src={''} alt={'ava'}/>
				</div>

				{!editMode &&
					<>
						<div className={s.profile__name}>
							Ivan Ivanov
						</div>
						<div className={s.profile__profession}>
							Front-end developer
						</div>
						<div className={s.profile__wrapBtn}>
							<button onClick={onEditButton} className={s.profile__editBtn}>
								Edit profile
							</button>
						</div>
					</>
				}


				{editMode && <ProfileForm onClickEditMode={onClickEditMode}/>}


			</section>

		</div>
	);
};