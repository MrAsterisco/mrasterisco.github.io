export default function calculateDuration(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
    years--;
    months += 12;
  }

  // Adjust months if the current day is earlier than the start day in the final month
  if (now.getDate() < start.getDate() && months > 0) {
      months--;
  }
  
  // If the duration is less than a month but spans across month end, ensure months is at least 0
  if (years === 0 && months < 0) {
      months = 0; // Or handle as "Less than a month" if preferred
  }
  
  // If start date is in the future, return empty string or specific message
  if (years < 0 || (years === 0 && months < 0)) {
      return "Present"; // Or handle future dates if necessary
  }


  const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  if (yearStr && monthStr) {
    return `${yearStr} ${monthStr}`;
  } else if (yearStr) {
    return yearStr;
  } else if (monthStr) {
    return monthStr;
  } else {
      // Handle case where duration is less than a month
      // Calculate difference in days if needed, or return a default string
      const diffTime = Math.abs(now.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays <= 30) { // Approximation for a month
          return "Less than a month";
      }
      return "Present"; // Default fallback if needed
  }
}