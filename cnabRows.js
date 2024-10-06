'use strict'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import bootstrap from './src/bootstrap/bootstrap.js';

const optionsYargs = yargs(hideBin(process.argv))
  .usage('Uso: $0 [options]')
  .option("f", { alias: "from", describe: "posição inicial de pesquisa da linha do Cnab", type: "number", demandOption: true })
  .option("t", { alias: "to", describe: "posição final de pesquisa da linha do Cnab", type: "number", demandOption: true })
  .option("d", { alias: "dir", describe: "Caminho do arquivo Cnab", type: "string", demandOption: false })
  .option("s", { alias: "segmento", describe: "tipo de segmento (p,q,r)", type: "string", demandOption: false })
  .option("c", { alias: "company", describe: "Pesquisa pelo lone da empresa", type: "string", demandOption: false })
  .option("e", { alias: "exportJSON", describe: "Sava arquivo json", type: "boolean", demandOption: false })

  .example('$0 -f 21 -t 34', 'lista a linha e campo que from e to do cnab')
  .example('$0 -f 21 -t 34 -s r', 'lista por segmento')
  .example('$0 -f 21 -t 34 -c ZENVIA MOBILE SERVICOS DIGITAIS AS', 'Lista pelo nome da empresa')
  .example('$0 -f 21 -t 34 -c ZENVIA MOBILE SERVICOS DIGITAIS AS -s "r" ', 'Lista pelo nome da empresa e segmento')
  .argv;

bootstrap(optionsYargs)
