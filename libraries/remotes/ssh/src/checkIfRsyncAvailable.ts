import { Config, NodeSSH } from "node-ssh";

export default async (sshTargetConfig: Config) => {
  const ssh = new NodeSSH();
  const activeConsole = await ssh.connect(sshTargetConfig);

  const script = `command -v rsync >/dev/null 2>&1 || { exit 1; }`;
  const { code } = await activeConsole.execCommand(script);
  await ssh.dispose();
  return !!code;
};
