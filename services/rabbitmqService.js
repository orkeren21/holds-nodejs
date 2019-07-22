import { logger } from "../utils/logger";
import { rollbar } from "../utils/rollbar";
import dotenv from "dotenv";
dotenv.config();

export function publishEntity(entity) {
  logger.info("Publishing Entity to RabbitMQ");
  let amqpContext = require("rabbit.js").createContext(process.env.CLOUDAMQP_URL);
  
  amqpContext.on("ready", function() {
    logger.info("RabbitMQ connection is READY");
    let pub = amqpContext.socket("PUB", { noCreate: true });
    
    pub.connect("holds.nodejs", function() {
      logger.info("Sending Payload to RabbitMQ");
      pub.publish("holds.nodejs", JSON.stringify({ entity: entity }), "utf8");
    });
  });
  amqpContext.on("error", error => {
    logger.info(`Error occurred when publishing entity: ${error}`);
    rollbar.log(`Error occurred when publishing entity: ${error}`);
  });
}
