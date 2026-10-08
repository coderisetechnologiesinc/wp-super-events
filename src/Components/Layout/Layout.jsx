import React, { useState, useEffect } from 'react';
import SideBar from '../Menu/SideMenu';
import styles from './Layout.module.scss';

const Layout = ( { children, selectedPage, onPageChange } ) => {
	const [ isDesktop, setIsDesktop ] = useState( window.innerWidth >= 768 );
	const useNativeNavigation = Boolean( window.servvData?.nativeAdmin );

	// Keep track of desktop vs mobile
	useEffect( () => {
		const onResize = () => setIsDesktop( window.innerWidth >= 768 );
		window.addEventListener( 'resize', onResize );
		return () => window.removeEventListener( 'resize', onResize );
	}, [] );

	// On mobile, collapsed=true → icon‑only; on desktop, always expanded
	const collapsed = ! isDesktop;

	if ( useNativeNavigation ) {
		return (
			<main className={ `servv-react-native-main ${ styles.main }` }>
				{ children }
			</main>
		);
	}

	return (
		<div className={ styles.shell }>
			{ /* Sidebar lives inside WP content wrapper, so no fixed/inset */ }
			<SideBar
				page={ selectedPage }
				onChange={ onPageChange }
				collapsed={ collapsed }
			/>

			{ /* Main content will sit to the right of that sidebar */ }
			<main className={ styles.shellMain }>
				{ children }
			</main>
		</div>
	);
};

export default Layout;
