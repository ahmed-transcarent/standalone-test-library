import { exec as ex } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(ex);

export async function pushToYalcInstallations() {
  const { stdout } = await exec("yalc push --sig");
  console.log(stdout);
}
