import CustomBtn from '../custom-button/CustomBtn';
import './styles.css';
const mainPage = () => {
	return (
		<div>
			<div className="login-wrapper">
				<CustomBtn text="SIGNIN" />
				<p className="mid-line"></p>
				<CustomBtn text="REGISTER" />
			</div>
			<div></div>
		</div>
	);
};

export default mainPage;
