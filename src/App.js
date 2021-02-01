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
import Register from './pages/register';
import Product from './pages/product';

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
						<Route path="/register">
							<Register />
						</Route>
						<Route exact path="/product/:id" component={Product}></Route>
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
