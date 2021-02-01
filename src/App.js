import './App.css';
import Header from './components/layout/header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/layout/footer';
import Home from './pages/home';
import LogIn from './pages/log-in';

function App() {
	return (
		<Router>
      <div className="App">
				<Header />
				<div className="App-body">
					<Switch>
						<Route path="/login">
							<LogIn />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
    </Router>
	);
}

export default App;
