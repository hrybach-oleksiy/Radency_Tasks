import setImg from '../../../../../utils/setImg';
import './styles.scss';

interface TableImgProps {
	type: string;
	className?: string;
}

const TableImg: React.FC<TableImgProps> = ({ type, className }) => {
	return (
		<img src={setImg(type)} alt={`${type} Icon`} className={className} />
	)
}

export default TableImg;