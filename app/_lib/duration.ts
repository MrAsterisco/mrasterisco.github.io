export default function calculateDuration(startDate: string): string {
  const [y, m, d] = startDate.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  // if we haven't reached the start day in the current month, subtract one month
  if (now.getDate() < start.getDate()) totalMonths--;

  if (totalMonths < 0) return "Present";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearStr = years ? `${years} year${years === 1 ? "" : "s"}` : "";
  const monthStr = months ? `${months} month${months === 1 ? "" : "s"}` : "";

  if (yearStr && monthStr) return `${yearStr} ${monthStr}`;
  if (yearStr) return yearStr;
  if (monthStr) return monthStr;
  return "Less than a month";
}
