/* global servvData */
import './bootstrap-i18n.js';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import React, { useRef, useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import LogRocket from 'logrocket';
import Layout from './Components/Layout/Layout.jsx';
import WordPressNavigation from './Components/Layout/WordPressNavigation.jsx';
import useCacheRefresh from './hooks/useCacheRefresh';
import useInstallStatus from './hooks/useInstallStatus';
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
	import( './Components/CreateEvent/EventEditorRoute.jsx' )
);
const EventRegistrantsPage = React.lazy( () => import( './Components/Pages/EventRegistrantsPage.jsx' ) );
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
	const fetchSettings = useServvStore( ( state ) => state.fetchSettings );
	const settings = useServvStore( ( state ) => state.settings );
	const bootstrapped = useRef( false );
	const defaultRoute = servvData.defaultRoute || 'dashboard';
	const { pathname } = useLocation();
	const informationalPage = ['plans', 'support'].includes(pathname === '/' ? defaultRoute : pathname.slice(1));

	useCacheRefresh( ['settings', 'filters', 'accounts'], async ( changed ) => {
		const store = useServvStore.getState();
		if ( changed.includes( 'settings' ) ) await store.fetchSettings();
		if ( changed.includes( 'filters' ) && store.settings ) await useServvStore.getState().syncFiltersFromServer();
		if ( changed.includes( 'accounts' ) ) await store.syncAccountsAfterEvents();
	} );


	// The install watcher owns the only /shop/info read on load: it chains its
	// checks off each response instead of firing on a timer, so a slow backend
	// can never leave several of them pending at once.
	const { status: installStatus, retry } = useInstallStatus( fetchSettings );

	// The rest of the bootstrap data only makes sense once the shop has
	// answered, and only needs fetching once per load. The store holds
	// `settings` only for a clean response, so its presence is the signal.
	useEffect( () => {
		if ( ! settings || bootstrapped.current ) return;
		bootstrapped.current = true;
		const store = useServvStore.getState();
		Promise.all( [
			store.syncFiltersFromServer(),
			store.syncAccountsAfterEvents(),
		] ).catch( ( error ) =>
			console.error( 'Unable to load WP Super Events data', error )
		);
	}, [ settings ] );

	const openPlugins = () =>
		window.location.assign( servvData.pluginsUrl || 'plugins.php' );

	if ( ! restAPIAvailable && ! informationalPage ) {
		return (
			<ValidationScreen
				variant="error"
				title="REST API not accessible"
				message="WordPress is not serving its REST API, so the plugin cannot reach your events. Restore access to /wp-json/ — permalinks, a security plugin or a server rule are the usual causes — then reload this page."
				actions={ [
					{
						text: 'Reload',
						type: 'primary',
						onAction: () => window.location.reload(),
					},
				] }
				troubleshoot
			/>
		);
	}

	if ( installStatus === 'failed' && ! informationalPage ) {
		return (
			<ValidationScreen
				variant="error"
				title="Activation failed"
				message="We could not finish connecting this site to WP Super Events. Turning the plugin off and on again runs the setup a second time, which clears most failures."
				actions={ [
					{
						text: 'Go to Plugins',
						type: 'primary',
						onAction: openPlugins,
					},
					{ text: 'Check again', onAction: retry },
				] }
				reactivate
				troubleshoot
			/>
		);
	}

	if ( installStatus === 'timeout' && ! informationalPage ) {
		return (
			<ValidationScreen
				variant="warning"
				title="Setup is taking longer than usual"
				message="Installation runs in the background through WP-Cron and has not reported back yet. It may still finish on its own — a site with WP-Cron disabled will not."
				actions={ [
					{ text: 'Check again', type: 'primary', onAction: retry },
					{ text: 'Go to Plugins', onAction: openPlugins },
				] }
				reactivate
				troubleshoot
			/>
		);
	}

	if ( installStatus === 'checking' && ! informationalPage ) {
		return (
			<ValidationScreen
				variant="progress"
				title="Installation in progress"
				message="We are connecting this site to WP Super Events. This usually takes less than a minute."
			/>
		);
	}

	return (
		<Suspense fallback={ null }>
			<WordPressNavigation />
			<ScrollManager />
			<Routes>
				<Route path="onboarding" element={ <OnboardingFlow /> } />

				<Route element={ <LayoutWrapper /> }>
					<Route path="events/new" element={ <CreateEventForm /> } />
					<Route path="events/:provider/:id/registrants" element={ <EventRegistrantsPage /> } />
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
