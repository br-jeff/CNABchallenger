import fs from 'fs';
import _ from 'lodash';

export default function exportJSONFile({ data, fileHeader }) {
  const jsonString = JSON.stringify(data, null, 2);
  const fileName = `${_.snakeCase(fileHeader.header.companyName)}_${new Date().toISOString()}.json`;
  const dir = './exported';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFile(`${dir}/${fileName}`, jsonString, (err) => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('JSON file has been saved.');
    }
  });
}
