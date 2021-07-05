import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataProvider from './components/DataProvider';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Footer from './components/Footer';

function App() {
	return (
		<DataProvider>
			<Router>
				<ScrollToTop />
				<Header />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route exact path='/hotel/:hotelId'>
						<Detail />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</DataProvider>
	);
}

export default App;