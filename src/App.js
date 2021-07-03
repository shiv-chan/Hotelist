import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route exact path='/detail'>
					<Detail />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
