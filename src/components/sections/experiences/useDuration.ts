export const useDuration = () => {
	function getYearsAndMonthsSince(startDate: Date, endDate: Date = new Date()) {
		let years = endDate.getFullYear() - startDate.getFullYear();
		let months = endDate.getMonth() - startDate.getMonth();

		// Adjust if current day is before start day
		if (endDate.getDate() < startDate.getDate()) {
			months--;
		}

		// Normalize negative months
		if (months < 0) {
			years--;
			months += 12;
		}

		return { years, months };
	}

	return getYearsAndMonthsSince;
};
