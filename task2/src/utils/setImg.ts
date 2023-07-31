
import taskLogo from '../assets/task.svg';
import randomLogo from '../assets/random.svg';
import ideaLogo from '../assets/idea.svg';

const setImg = (category: string) => {
	if (category === 'Task') {
		return taskLogo;
	}
	if (category === 'Random Thought') {
		return randomLogo;
	}
	if (category === 'Idea') {
		return ideaLogo;
	}
}

export default setImg;