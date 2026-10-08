/* global servvData */
import './bootstrap-i18n.js';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import React, { useRef, useEffect, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import LogRocket from 'logrocket';
import Layout from './Components/Layout/Layout.jsx';
import WordPressNavigation from './Components/Layout/WordPressNavigation.jsx';
import useCacheRefresh from './hooks/useCacheRefresh';
import { refreshExpiredRequests } from './utilities/requestCache';
// Global base for the admin app (tokens, typography, resets).
// Compiled into build/admin.css, which servv.php enqueues.
import './styles/base.scss';
const EventsListPage = React.lazy( () =>
	import( './Components/Pages/EventsListPage' )
);
const IntegrationsPage = React.lazy( () =>
	import( './Components/Pages/Integrations/IntegrationsPage' )
);
const WidgetPage = React.lazy(() => import('./Components/Pages/WidgetPage'));
const SettingsPage = React.lazy( () =>
	import( './Components/Pages/SettingsPage' )
);
const FiltersPage = React.lazy( () =>
	import( './Components/Pages/Filters/FiltersPage' )
);
const EmailTemplates = React.lazy( () =>
	import( './Components/Pages/EmailTemplates' )
);
const SentEmails = React.lazy( () =>
	import( './Components/Pages/SentEmails.jsx' )
);
const AnalyticsPage = React.lazy( () =>
	import( './Components/Pages/AnalyticsPage' )
);
const BookingsPage = React.lazy( () =>
	import( './Components/Pages/BookingsPage' )
);
const CalendarPage = React.lazy( () =>
	import( './Components/Pages/CalendarPage' )
);
const PlansPage = React.lazy(() => import('./Components/Pages/PlansPage'));
const SupportPage = React.lazy( () =>
	import( './Components/Pages/SupportPage' )
);
const BrandingPage = React.lazy( () =>
	import( './Components/Pages/BrandingPage.jsx' )
);
const ScrollManager = React.lazy( () =>
	import( './Components/Layout/ScrollManager.jsx' )
);
import { initI18n, translateAll, t } from './utilities/textResolver.js';
window.t = t;
initI18n( 'en_US' );
import { useServvStore } from './store/useServvStore';

import 'quill/dist/quill.core.css';

import ValidationScreen from './Components/Pages/ValidationScreen.jsx';
const CreateEventForm = React.lazy( () =>
	import( './Components/CreateEvent/UnifiedEventForm.jsx' )
);
const Dashboard = React.lazy( () =>
	import( './Components/Pages/Dashboard.jsx' )
);
const CreateFilterPage = React.lazy( () =>
	import( './Components/Pages/Filters/CreateFilterPage.jsx' )
);
const FiltersListPage = React.lazy( () =>
	import( './Components/Pages/Filters/FiltersListPage.jsx' )
);

const ZoomPage = React.lazy( () =>
	import( './Components/Pages/Integrations/ZoomPage.jsx' )
);
const ZoomSettingsPage = React.lazy( () =>
	import( './Components/Pages/Integrations/ZoomSettingsPage.jsx' )
);
const StripeIntegrationsPage = React.lazy( () =>
	import( './Components/Pages/Integrations/StripeIntegrationsPage.jsx' )
);
const EmailsPage = React.lazy( () =>
	import( './Components/Pages/EmailsPage.jsx' )
);

const GoogleAnalyticsPage = React.lazy( () =>
	import( './Components/Pages/GoogleAnalyticsPage.jsx' )
);
const CalendarsPage = React.lazy( () =>
	import( './Components/Pages/Integrations/CalendarsPage.jsx' )
);
const OnboardingFlow = React.lazy( () =>
	import( './Components/Onboarding/OnboardingFlow.jsx' )
);
const LayoutWrapper = () => (
	<Layout>
		<Suspense fallback={ null }>
			<Outlet />
		</Suspense>
	</Layout>
);

const AppRouter = ( { restAPIAvailable } ) => {
	const { fetchSettings } = useServvStore();
	const [ statusChecked, setStatusChecked ] = useState( false );
	const intervalRef = useRef( null );
	const defaultRoute = servvData.defaultRoute || 'dashboard';
	const { pathname } = useLocation();
	const informationalPage = ['plans', 'support'].includes(pathname === '/' ? defaultRoute : pathname.slice(1));

	useCacheRefresh( ['settings', 'filters', 'accounts'], async ( changed ) => {
		const store = useServvStore.getState();
		if ( changed.includes( 'settings' ) ) await store.fetchSettings();
		if ( changed.includes( 'filters' ) && store.settings ) await useServvStore.getState().syncFiltersFromServer();
		if ( changed.includes( 'accounts' ) ) await store.syncAccountsAfterEvents();
	} );

	useEffect( () => {
		const refresh = () => {
			if ( document.visibilityState !== 'hidden' ) refreshExpiredRequests();
		};
		window.addEventListener( 'focus', refresh );
		document.addEventListener( 'visibilitychange', refresh );
		return () => {
			window.removeEventListener( 'focus', refresh );
			document.removeEventListener( 'visibilitychange', refresh );
		};
	}, [] );

	useEffect( () => {
		const initializeData = async () => {
			const settings = await fetchSettings();
			if ( settings && ! settings.error && ! settings.errorCode ) {
				const store = useServvStore.getState();
				await Promise.all( [store.syncFiltersFromServer(), store.syncAccountsAfterEvents()] );
			}
		};
		initializeData();

		intervalRef.current = setInterval( async () => {
			if ( servvData.install_status !== 'ok' ) {
				const settings = await fetchSettings();

				if ( servvData.install_status === 'ok' || settings?.id ) {
					setStatusChecked( true );
					clearInterval( intervalRef.current );
					intervalRef.current = null;
				}

				if ( servvData.install_status === 'failed' ) {
					clearInterval( intervalRef.current );
					intervalRef.current = null;
				}
			}
		}, 5000 );

		return () => {
			if ( intervalRef.current ) {
				clearInterval( intervalRef.current );
			}
		};
	}, [ fetchSettings ] );

	if ( ! restAPIAvailable && ! informationalPage ) {
		return <ValidationScreen message="REST API not accessible." />;
	}

	if ( servvData.install_status === 'failed' && ! informationalPage ) {
		return (
			<ValidationScreen message="⚠️ Activation failed." troubleshoot />
		);
	}

	if (
		servvData.install_status !== 'ok' &&
		servvData.install_status !== 'failed' &&
		! statusChecked && ! informationalPage
	) {
		return <ValidationScreen message="Installation in progress..." />;
	}

	return (
		<Suspense fallback={ null }>
			<WordPressNavigation />
			<ScrollManager />
			<Routes>
				<Route path="onboarding" element={ <OnboardingFlow /> } />

				<Route element={ <LayoutWrapper /> }>
					<Route path="events/new" element={ <CreateEventForm /> } />
					<Route path="events/offline/:id" element={ <CreateEventForm /> } />
					<Route path="events/zoom/:id" element={ <CreateEventForm /> } />
					<Route
						path="/"
						element={ <Navigate to={ defaultRoute } replace /> }
					/>
					<Route path="dashboard" element={ <Dashboard /> } />

					<Route path="events" element={ <EventsListPage /> } />

					<Route path="bookings" element={ <BookingsPage /> } />
					<Route path="calendar" element={ <CalendarPage /> } />
					<Route path="filters" element={ <FiltersPage /> } />
					<Route
						path="filters/list/:type"
						element={ <FiltersListPage /> }
					/>
					<Route
						path="filters/new/:type"
						element={ <CreateFilterPage /> }
					/>
					<Route
						path="integrations"
						element={ <IntegrationsPage /> }
					/>
					<Route
						path="integrations/stripe"
						element={ <StripeIntegrationsPage /> }
					/>
					<Route
						path="integrations/gmail"
						element={ <EmailsPage /> }
					/>
					<Route
						path="integrations/calendars"
						element={ <CalendarsPage /> }
					/>
					<Route path="integrations/zoom" element={ <ZoomPage /> } />
					<Route
						path="integrations/analytics"
						element={ <GoogleAnalyticsPage /> }
					/>
					<Route
						path="integrations/zoom/settings"
						element={ <ZoomSettingsPage /> }
					/>
					<Route path="templates" element={ <EmailTemplates /> } />
					<Route path="notifications" element={ <SentEmails /> } />
					<Route path="emails-list" element={ <SentEmails /> } />
					<Route path="settings" element={ <SettingsPage /> } />
					<Route path="widget" element={ <WidgetPage /> } />
					<Route path="analytics" element={ <AnalyticsPage /> } />
					<Route path="branding" element={ <BrandingPage /> } />
					<Route path="support" element={ <SupportPage /> } />
					<Route path="plans" element={ <PlansPage /> } />
				</Route>
			</Routes>
		</Suspense>
	);
};

domReady( () => {
	const rootEl = document.getElementById( 'servv-wrap' );
	const root = createRoot( rootEl );

	async function init() {
		let restAPIAvailable = true;

		try {
			const res = await fetch( window.location.origin + '/wp-json/' );
			restAPIAvailable = res.ok;
		} catch {
			restAPIAvailable = false;
		}
		if ( servvData.env === 'test' ) {
			LogRocket.init( 'nh6p6d/servvai-test' );
		}
		root.render(
			<HashRouter>
				<AppRouter restAPIAvailable={ restAPIAvailable } />
			</HashRouter>
		);

		setTimeout( () => translateAll(), 0 );
	}

	init();
} );
