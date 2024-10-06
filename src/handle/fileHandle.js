import chalk from "chalk"
import path from "path"
import shellQuestion from "../shell/interactive/confirmTerminal.js"

export async function getFile(dir) {
  if (dir) {
    return path.resolve(dir);
  }

  const shouldContinue  = await shellQuestion({
    message: chalk.red("Nenhum arquivo foi configurado, deseja continuar com arquivo padrão?"),
  });

  if (shouldContinue) {
    return path.resolve("./cnabExample.rem");
  } else {
    console.log(chalk.red("Operação cancelada."));
    return null;
  }
}
