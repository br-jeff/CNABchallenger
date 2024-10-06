import shell from 'shelljs'

export default function getHeaderInformation(filePath) {
    const result = shell.exec(`head -n 2 ${filePath}`);

    if (result.code !== 0) {
        console.error(`Erro: ${result.stderr}`);
    } else {
        return result.stdout
    }
}