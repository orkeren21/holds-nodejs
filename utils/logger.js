import dotenv from "dotenv";
import Logger from "le_node";

dotenv.config();

export const logger = new Logger({
  token: process.env.LOGENTRIES_TOKEN
});