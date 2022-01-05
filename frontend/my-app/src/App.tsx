import './App.css';
import Grid from '@mui/material/Grid';
import MainHeader from './components/main-header/MainHeader';
import MainPage from './components/main-page/mainPage';
import SideBar from './components/side-bar/SideBar';
function App() {
	return (
		<div className="app">
			<Grid container>
				<Grid className="box1" container item xs={9} sm={10}>
					<Grid item xs={12} className="main-header">
						<MainHeader />
					</Grid>
					<Grid item xs={12} className="main-page">
						<MainPage />
					</Grid>
				</Grid>
				<Grid className="box2" item xs={3} sm={2}>
					<SideBar />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
