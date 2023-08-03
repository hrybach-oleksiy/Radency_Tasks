import taskIcon from '../assets/task.svg';
import randomIcon from '../assets/random.svg';
import ideaIcon from '../assets/idea.svg';
import archivedIcon from '../assets/archive.svg';
import unarchivedIcon from '../assets/unarchive.svg';
import removeIcon from '../assets/remove.svg';

const setImg = (type: string) => {
	switch (type) {
		case 'Task':
			return taskIcon;
		case 'Random Thought':
			return randomIcon;
		case 'Idea':
			return ideaIcon;
		case 'Archived':
			return archivedIcon;
		case 'Unarchived':
			return unarchivedIcon;
		case 'Remove':
			return removeIcon;
	}
}
export default setImg;