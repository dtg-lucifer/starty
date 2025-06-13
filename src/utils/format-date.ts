export function formatDate(dateString: string): string {
  try {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "";
    }

    // Fixed format to avoid hydration issues
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Using UTC methods to ensure consistent rendering between server and client
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Format: DD Month, YYYY (consistent between server and client)
    return `${day} ${month}, ${year}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}
