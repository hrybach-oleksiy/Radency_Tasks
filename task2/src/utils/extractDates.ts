const extractDates = (inputString: string) => {
	const dateRegex = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
	const matches = inputString.match(dateRegex);

	if (!matches) {
		return [];
	}

	const formattedDates = matches.map((match) => {
		const [day, month, year] = match.split('/');
		return `${parseInt(day)}/${parseInt(month)}/${parseInt(year)}`;
	});

	return formattedDates;
};

export default extractDates;