import shell from 'shelljs'

export default function grepSegment(segmentMapper, filePath) {
    const segmentPos = segmentMapper.segPosition[0];
    const segment = segmentMapper.segmento;
    
    const command = `grep -E '' ${filePath} | awk -v pos=${segmentPos} -v char='${segment}' 'length($0) > pos && substr($0, pos + 1, 1) == char'`;
    const result = shell.exec(command);

    if (result.code !== 0) {
        console.error(`Erro: ${result.stderr}`);
    } else {
        return result.stdout
    }
}
