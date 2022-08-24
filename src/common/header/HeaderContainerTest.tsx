import {NavigateContainer} from './navigate/NavigateContainer';
import styles from './HeaderContainer.module.scss';

export const HeaderContainerTest = () => {

	return (
		<header className={styles.header}>
			<NavigateContainer/>
		</header>
	);

};