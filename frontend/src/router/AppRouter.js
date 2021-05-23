import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/dashboard';
const Home = React.lazy(() => import('../components/home'));
const ContactUs = React.lazy(() => import('../components/contactUs'));

const AppRouter = () => {
	return (
		<div className="container mt-3">
			<Switch>
				<React.Suspense fallback={<div className="loader" />}>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/contactUs" render={(props) => <ContactUs {...props} />} />
				</React.Suspense>
				<Redirect to="/" />
			</Switch>
		</div>
	);
};

export default AppRouter;
