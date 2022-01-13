import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { maxWidth } from '@mui/system';
import './styles.css';
const ProjectCard = () => {
	return (
		<div>
			<Card sx={{ maxWidth: 345, minWidth: 235 }} className="card">
				<CardContent className="card-header">
					<Typography>HEADING</Typography>
				</CardContent>
				<CardContent className="card-body">
					<Typography className="card-body-element">Task 1</Typography>
					<Typography className="card-body-element">Task 2</Typography>
					<Typography className="card-body-element">Task 3</Typography>
					<Typography className="card-body-element">Task 4</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProjectCard;
