import './App.css';
import Grid from '@mui/material/Grid';
import MainHeader from './components/main-header/MainHeader';
import SideBar from './components/side-bar/SideBar';
import LoginPage from './components/loginPage/loginPage';
import { Route, Switch } from 'react-router-dom';
function App() {
	return (
		<div className="app">
			<Switch>
				<Grid container>
					<Grid className="box1" container item xs={9} sm={10}>
						<Grid item xs={12} className="main-header">
							<MainHeader />
						</Grid>
						<Route exact path="/login">
							<Grid item xs={12} className="login-page">
								<LoginPage />
							</Grid>
						</Route>
					</Grid>
					<Grid className="box2" item xs={3} sm={2}>
						<SideBar />
					</Grid>
				</Grid>
			</Switch>
		</div>
	);
}

export default App;
