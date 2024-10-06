import chalk from 'chalk'

export default function displayTerimnal(from, to, data, fileHeader) { 
    console.log(`${chalk.white.bold.bgGreen("CNAB 240 - " + fileHeader.header.companyNumber + " - " + fileHeader.header.companyName )}`)
    data.forEach(data => {
        const { textoLinha, linha, empresa, segmento} = data
        if(!textoLinha) return
        console.log(
            `
            ${chalk.bold("linha: " + linha)} - ${chalk.bold.green("Empresa: " + empresa)}  ${chalk.bold("segmento: " + segmento)} 
            ${textoLinha.substring(0, from)}${chalk.inverse.bgBlack(textoLinha.substring(from - 1, to))}${textoLinha.substring(to)}
            
            `
        )
    })
}