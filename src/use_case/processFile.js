import _ from 'lodash'
import strategyData from './strategyData.js';
import displayTerimnal from './displayTerminal.js';
import exportJSONFile from './exportJSONFile.js';


export default async function processFile({ filePath, args, fileHeader }) {
    const { from, to, segmento, company, exportJSON } = args
    const data = strategyData({ filePath, segmento, company })
    displayTerimnal(from, to, data, fileHeader)
    if (exportJSON) {
       return exportJSONFile({ data, fileHeader });
    }
    return
}