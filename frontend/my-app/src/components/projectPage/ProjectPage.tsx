import './styles.css';
import AddProjectBtn from '../addProjectBtn/AddProjectBtn';
import ProjectCard from '../projectCard/ProjectCard';
import CustomBtn from '../custom-button/CustomBtn';
const ProjectPage = () => {
	return (
		<div className="page-wrapper">
			<div className="project-list-wrapper">
				<div className="project-card-wrapper">
					<div>
						<ProjectCard />
					</div>
					<div className="project-card-btn-wrapper">
						<button className="green">1</button>
						<button className="yellow">2</button>
						<button className="red">3</button>
					</div>
				</div>
				<div className="add-card-button">
					<CustomBtn text="+ Add card" />
				</div>
			</div>
			<AddProjectBtn />
		</div>
	);
};

export default ProjectPage;
