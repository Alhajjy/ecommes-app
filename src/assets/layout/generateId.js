export const generateUniqueId = () => {
  const timestamp = new Date().getTime(); // Get current timestamp
  const randomNum = Math.floor(Math.random() * 10000); // Generate random number between 0 and 9999
  const uniqueId = parseInt(`${timestamp}${randomNum}`); // Combine timestamp and random number and parse as integer
  return uniqueId;
};
