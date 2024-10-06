import getAllData from "./getAlldata.js";
import getBySegmentData from "./getBySegmentData.js";

export default function getByCompanyName({filePath, segmento, company }) {
    const allData = segmento ? getBySegmentData({filePath, segmento}) : getAllData(filePath)
    return allData.filter(data => data.empresa && data.empresa.replace(/\s/g,'').toUpperCase() == company)
}