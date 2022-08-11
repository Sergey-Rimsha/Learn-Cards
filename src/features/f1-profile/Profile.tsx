import React, {useState} from 'react';



import {UserDataType} from '../../store/reducers/profileReducer';

import s from './Profile.module.scss';
import {ProfileForm} from './p0-profileForm/ProfileForm';

type ProfilePropsType = {
	editMode: boolean
	onClickEditMode: (edit: boolean) => void
	onChangeProfile: (name?: string, avatar?: string) => void
	userData: UserDataType
}

export const Profile = (props: ProfilePropsType) => {

	const {editMode, onClickEditMode, userData, onChangeProfile} = props;

	const onEditButton = () => {
		onClickEditMode(true);
	};

	return (
		<div className={s.block}>
			<div className={s.profile}>
				<div className={s.profile__title}>
					Personal Information
				</div>
				<div className={s.profile__ava}>
					<img src={userData.avatar} alt={'ava'}/>
				</div>

				{!editMode &&
					<>
						<div className={s.profile__name}>
							{userData.name}
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

				{
					editMode &&
					<ProfileForm
						name={userData.name}
						onChangeProfile={onChangeProfile}
						onClickEditMode={onClickEditMode}/>
				}
			</div>
		</div>
	);
};