import {NavigateContainer} from './navigate/NavigateContainer';
import styles from './HeaderContainer.module.scss';

export const HeaderContainer = () => {

	return (
		<header className={styles.header}>
			<NavigateContainer/>
		</header>
	);

};