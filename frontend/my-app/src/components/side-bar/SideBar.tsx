import './style.css';
import CustomBtn from '../custom-button/CustomBtn';

const SideBar = () => {
	return (
		<div className="side-wrapper">
			<div className="logo-wrapper">
				<p>LOGO HERE</p>
			</div>
			<div className="btn-wrapper">
				<CustomBtn text="+ ADD A PROJECT" />
				<CustomBtn text="+ INVITE A MEMBER" />
			</div>
		</div>
	);
};

export default SideBar;
