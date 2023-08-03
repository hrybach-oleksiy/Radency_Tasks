
interface TableTitleProps {
	title: string;
}

const TableTitle: React.FC<TableTitleProps> = ({ title }) => {
	return (
		<h2>{title}</h2>
	)
}

export default TableTitle;