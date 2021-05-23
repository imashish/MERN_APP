import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<div>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;
