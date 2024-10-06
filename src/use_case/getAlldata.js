import mapperLayout from '../mapper/layout/mapperLayout.js';
import extractFields from '../../utils/extractLayoutFields.js';
import grepAllSegments from '../shell/grepAllSegment.js';
import _ from 'lodash'

const ARRAY_CHUNK_SIZE = 3
const HEADER_SIZE = 2
const CORRECT_TO_NON_ZERO_INDEX = 1
const SEGMENT_POSITION = 13

export default function getAllData(filePath) {
    const segmentGrep = grepAllSegments(filePath)

    const mapperByLayout = segmentGrep.split("\n").map(segment => ({ textLine: segment, ...extractFields(segment, mapperLayout.find(layout => layout.segmento == segment[SEGMENT_POSITION])) }))
    const transactions = _.chunk(mapperByLayout, ARRAY_CHUNK_SIZE)

    const dataInformation = []

    transactions.forEach((segments, idx) => {
        const SegmentQ = segments.find(segment => segment.idSegmento === "Q")
        segments.forEach((segment, chunkIdx) => {
            const data = {}

            if (!segment) return

            data.linha = (idx * ARRAY_CHUNK_SIZE) + chunkIdx + HEADER_SIZE + CORRECT_TO_NON_ZERO_INDEX
            data.textoLinha = segment.textLine
            data.segmento = segment.idSegmento
            if(SegmentQ) {
                data.empresa = SegmentQ.Empresa
                data["endereço"] = SegmentQ["Endereço"]
                data.CEP = SegmentQ.CEP 
            }
      
            dataInformation.push(data)
        })
    })

    return dataInformation
}