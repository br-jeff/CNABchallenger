import inquirer from "inquirer";

export default async function confirmTerminal({ message }) {
  try {
    const { shouldContinue } = await inquirer.prompt({
      type: "confirm",
      name: "shouldContinue",
      message,
    });
    return shouldContinue;
  } catch (error) {
    console.log("Erro ao receber input: " + error.message);
    return false;
  }
}
