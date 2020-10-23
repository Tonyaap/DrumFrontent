console.log("process.env", process.env);
export const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000"
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const DEFAULT_PAGINATION_LIMIT = 10;
