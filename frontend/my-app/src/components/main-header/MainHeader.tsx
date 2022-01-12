import './styles.css';
import CustomBtn from '../custom-button/CustomBtn';
const MainHeader = () => {
	return (
		<div className="header">
			<div className="header-box1">
				<p>PROJECT NAME</p>
				<div className="header-box1-btn-wrapper">
					<button className="header-box1-btn">M</button>
					<button className="header-box1-btn">M</button>
				</div>
			</div>
			<div className="header-box2">
				<CustomBtn text="THEME" />
				<CustomBtn text="SIGN IN" />
			</div>
		</div>
	);
};

export default MainHeader;
