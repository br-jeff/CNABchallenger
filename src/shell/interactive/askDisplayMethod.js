import inquirer from "inquirer";

export default async function askDisplayMethod() {
  try {
    return await inquirer.prompt({
        type: 'list',
        name: 'exportMethod',
        message: 'Como deseja ver os dados ?',
        choices: ['Terminal', 'JSON'],
    });
    return exportMethod;
  } catch (error) {
    console.log("Erro ao receber input: " + error.message);
    return false;
  }
}
