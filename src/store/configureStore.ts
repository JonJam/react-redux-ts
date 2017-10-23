import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

const configure =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configure;
