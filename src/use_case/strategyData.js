import getAllData from "./getAlldata.js";
import getByCompanyName from "./getByCompanyName.js";
import getBySegmentData from "./getBySegmentData.js";

export default function strategyData({filePath, segmento, company }) {
    if(company) {
        return getByCompanyName({filePath, segmento, company })
    }

    if(["P", "Q", "R"].includes(segmento)) {
        return getBySegmentData({ filePath, segmento })
    }
    
    return getAllData(filePath)
}