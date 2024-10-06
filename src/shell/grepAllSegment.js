import shell from 'shelljs';

export default function grepAllSegments(filePath) {
    const command = `grep -E '' ${filePath} | awk -v pos=13 'length($0) > pos && (substr($0, pos + 1, 1) == "P" || substr($0, pos + 1, 1) == "Q" || substr($0, pos + 1, 1) == "R")'`;
    const result = shell.exec(command);

    if (result.code !== 0) {
        console.error(`Erro: ${result.stderr}`);
    } else {
        return result.stdout;
    }
}
