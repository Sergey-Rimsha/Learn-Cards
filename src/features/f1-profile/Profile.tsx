
import s from './Profile.module.scss';

export const Profile = () => {

	return (
		<div className={s.block}>
			<section className={s.profile}>
				<div className={s.profile__title}>
					Personal Information
				</div>
				<div className={s.profile__ava}>
					<img src={''} alt={'ava'}/>
				</div>
				<h3>Profile</h3>
			</section>

		</div>
	);
};