import getHeaderInformation from '../shell/headHeader.js'
import headerLayout from './layout/headerLayout.js'
import trailerLayout from './layout/trailerLayout.js'
import extractLayoutFields from '../../utils/extractLayoutFields.js'


export default function headerMapper(filePath) {
    const shellCat = getHeaderInformation(filePath)
    const headers = shellCat.split("\n")
    return { header: extractLayoutFields(headers[0], headerLayout), trailer: extractLayoutFields(headers[1], trailerLayout) }
}
