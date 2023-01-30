import _ from 'lodash';
import fs from 'fs';
import process from 'process';
import path from 'path';
import parses from './parses.js';
import getFormat from './formatters/index.js';

const findDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const allKeys = _.sortBy(_.uniq([...keys1, ...keys2]));
  const diffStructure = allKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        name: key,
        value: findDiff(obj1[key], obj2[key]),
        type: 'nested',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        name: key,
        value: obj1[key],
        type: 'deleted',
      };
    }
    if (!_.has(obj1, key)) {
      return {
        name: key,
        value: obj2[key],
        type: 'added',
      };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return {
        name: key,
        value1: obj1[key],
        value2: obj2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: obj1[key],
      type: 'unchanged',
    };
  });
  return diffStructure;
};

const getfilePath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (pathToFile) => fs.readFileSync(getfilePath(pathToFile), 'utf-8');

const extname = (filePath) => path.extname(getfilePath(filePath));

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const format1 = extname(filePath1);
  const format2 = extname(filePath2);

  const readedFile1 = readFile(filePath1);
  const readedFile2 = readFile(filePath2);

  const obj1 = parses(readedFile1, format1);
  const obj2 = parses(readedFile2, format2);

  const diff = findDiff(obj1, obj2);

  return getFormat(diff, format);
};

export default genDiff;
