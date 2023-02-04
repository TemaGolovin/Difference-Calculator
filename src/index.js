import _ from 'lodash';
import fs from 'fs';
import process from 'process';
import path from 'path';
import parser from './parser.js';
import getFormat from './formatters/index.js';
import findDiff from './findDiff.js'

const getfilePath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (pathToFile) => fs.readFileSync(getfilePath(pathToFile), 'utf-8');

const extname = (filePath) => path.extname(getfilePath(filePath));

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const format1 = extname(filePath1);
  const format2 = extname(filePath2);

  const readedFile1 = readFile(filePath1);
  const readedFile2 = readFile(filePath2);

  const obj1 = parser(readedFile1, format1);
  const obj2 = parser(readedFile2, format2);

  const diff = findDiff(obj1, obj2);

  return getFormat(diff, format);
};

export default genDiff;
