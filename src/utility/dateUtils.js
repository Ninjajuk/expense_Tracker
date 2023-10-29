export function extractMonthAndDateFromDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return {
      formattedDate: "Invalid Date",
      monthName: "Invalid Month"
    };
  }

  const options = { month: "long", year: "numeric", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-IN", options);
  const monthName = date.toLocaleDateString("en-IN", { month: "long" });

  return {
    formattedDate,
    monthName
  };
}
