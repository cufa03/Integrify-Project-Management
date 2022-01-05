import './styles.css';
const CustomBtn = ({ text }: any) => {
	return (
		<div>
			<button className="side-btn">{text}</button>
		</div>
	);
};

export default CustomBtn;
