import chalk from "chalk"
export default function validate({ from, to, segmento, company, dir }) {
    const erros = []
  
    if(from && from <= 0) {
      erros.push("O from não pode ser negativo")
    }
  
    if(to && to <= 0) {
      erros.push("O to não pode ser negativo")
    }
  
    if(segmento) {
      const isValidSegmento = ["p", "q", "r"].includes(segmento.toLowerCase())
      if(!isValidSegmento) {
        erros.push(`O Segmento "${segmento}" é inválido, tente os segmentos p,q ou r`)
      }
    }

  
    erros.forEach(err => console.log(chalk.red(err)))
    return erros
  }
  