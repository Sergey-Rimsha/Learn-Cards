import {NavLink} from 'react-router-dom';

import {PATH} from '../../../app/Routing/Routing';

import styles from './NavigateContainer.module.scss';


export const NavigateContainer = () => {

	const setActive = ({isActive}: any) => (isActive ? styles.navigation__item_active : '');

	return (
		<nav className={styles.navigation}>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.profile}>
					profile
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.login}>
					login
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.register}>
					registration
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.recovery}>
					recovery password
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.newPassword}>
					new password
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.notFound}>
					not found
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.testComponents}>
					test Components
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={PATH.packList}>
					packList
				</NavLink>
			</div>
		</nav>
	);
};