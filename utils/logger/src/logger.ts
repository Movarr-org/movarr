import pino from "pino";

export default pino({
  level: process.env.LOGLEVEL ?? "debug"
});
