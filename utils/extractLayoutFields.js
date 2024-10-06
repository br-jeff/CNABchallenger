/**
 * @param {string} line - A linha de onde os campos serão extraídos.
 * @param {Object} mapper - O objeto que contém a definição do layout.
 * @param {Array} mapper.layout - Um array de campos definidos no layout.
 * @returns {Object} .
 */

export default function extractFields(line, mapper) {
    if (!mapper) {
        return
    }
    const extracted = {};
    mapper.layout.forEach(field => {
        const { positions, name, default: def } = field;
        const start = positions[0];
        const end = positions[1];
        const value = line.slice(start, end + 1).trim() || def;
        extracted[name] = value;
    });
    return extracted;
};