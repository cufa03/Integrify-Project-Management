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
		</div>
	);
};

export default LoginPage;
