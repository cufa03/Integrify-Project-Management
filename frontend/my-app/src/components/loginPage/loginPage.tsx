import CustomBtn from '../custom-button/CustomBtn';
import './styles.css';
const LoginPage = () => {
	return (
		<div>
			<div className="login-wrapper">
				<CustomBtn text="SIGNIN" />
				<p className="mid-line"></p>
				<CustomBtn text="REGISTER" />
			</div>
			<div className="add-project-wrapper">
				<CustomBtn text="+ADD PROJECT LIST" />
			</div>
		</div>
	);
};

export default LoginPage;
