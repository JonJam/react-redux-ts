import baseUrlDev from "./baseUrl.dev";
import baseUrlProd from "./baseUrl.prod";

const baseUrl =
  process.env.NODE_ENV === "production" ? baseUrlProd : baseUrlDev;

export default baseUrl;
