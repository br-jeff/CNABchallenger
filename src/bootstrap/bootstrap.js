import { getFile } from '../handle/fileHandle.js'
import processFile from '../use_case/processFile.js'
import dataFormatter from './dataFormatter.js'
import validate from './dataValidator.js'
import headerMapper from '../mapper/headerMapper.js'


export default async function bootstrap(args) {
  const { from, to, segmento, company, dir } = args
  const erros = validate({ from, to, segmento, dir, company } )

  if(erros.length) return

  const filePath = await getFile(dir)

  if(!filePath) {
    console.log("Arquivo não encontrado")
    return
  } 

  const header = headerMapper(filePath)

  processFile({ filePath, args: dataFormatter(args), fileHeader: header })
}


