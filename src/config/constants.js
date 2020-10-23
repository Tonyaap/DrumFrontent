console.log("process.env", process.env);
export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:4000"
    : "https://drumbackend.herokuapp.com";
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const DEFAULT_PAGINATION_LIMIT = 10;
