import Rollbar from "rollbar";
import dotenv from "dotenv";
dotenv.config();

export const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
