export default function formatData(args) {
    const { from, to, segmento, company, dir, exportJSON } = args
    const toIndexPos = (n) => Number(n) - 1
    return { from: toIndexPos(from), to: toIndexPos(to), segmento: segmento && segmento.toUpperCase(), company: company && company.replace(/\s/g,'').toUpperCase(), dir, exportJSON }
}
