import logger from "@movarr/logger/src/logger";
import { Config, NodeSSH } from "node-ssh";

export default async (sshTargetConfig: Config) => {
  const ssh = new NodeSSH();
  const activeConsole = await ssh.connect(sshTargetConfig);

  const script = `df -h`;
  const { code, stdout, stderr } = await activeConsole.execCommand(script);
  if (stderr) logger.error(stderr);
  if (stdout) logger.debug(stdout);
  logger.debug(code, "code");
  await ssh.dispose();
  return !!code;
};
