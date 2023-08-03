import TableImg from "../TableImg/TableImg";
import './styles.scss';

interface TableButtonProps {
	onBtnClick?: () => void;
	type: string;
	content?: string;
	className?: string;
}

const TableButton: React.FC<TableButtonProps> = ({ onBtnClick, type, content, className }) => {
	return (
		<button onClick={onBtnClick} className='btn'>
			{content ? content : <TableImg type={type} className={className} />}
		</button>
	)
}

export default TableButton;