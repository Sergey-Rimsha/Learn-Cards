import {NavLink} from 'react-router-dom';

import {pathWays} from '../../ways/Ways';

import styles from './NavigateContainer.module.scss';


export const NavigateContainer = () => {


	const setActive = ({isActive}: any) => (isActive ? styles.navigation__item_active : '');

	return (
		<nav className={styles.navigation}>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.profile}>
					profile
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.login}>
					login
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.registration}>
					registration
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.recovery}>
					recovery password
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.newPassword}>
					new password
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.notFound}>
					notfound
				</NavLink>
			</div>
			<div className={styles.navigation__item}>
				<NavLink
					className={setActive}
					to={pathWays.testComponents}>
					test Components
				</NavLink>
			</div>
		</nav>
	);
};