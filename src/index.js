import _ from "lodash";
import fs from "fs";
import process from "process";
import path from "path";

const getfilePath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (pathToFile) => fs.readFileSync(pathToFile, "utf-8");

const parsesFile = (file) => JSON.parse(file);

const genDiff = (filePath1, filePath2) => {
  const file1 = getfilePath(filePath1);
  const file2 = getfilePath(filePath2);

  const readedFile1 = readFile(file1);
  const readedFile2 = readFile(file2);

  const obj1 = parsesFile(readedFile1);
  const obj2 = parsesFile(readedFile2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const uniqKeys = [...new Set(keys1.concat(keys2))];
  const sortUniqKeys = uniqKeys.slice().sort();
  let result = "";
  /* eslint-disable-next-line */
  for (const key of sortUniqKeys) {
    if (obj1[key] === obj2[key]) {
      result = `${result}   ${key}: ${obj1[key]}\n`;
    } else if (
      _.has(obj1, key) &&
      _.has(obj2, key) &&
      obj1[key] !== obj2[key]
    ) {
      result = `${result} - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}\n`;
    } else if (_.has(obj1, key)) {
      result = `${result} - ${key}: ${obj1[key]}\n`;
    } else if (_.has(obj2, key)) {
      result = `${result} + ${key}: ${obj2[key]}\n`;
    }
  }

  return `{\n${result}}`;
};

export default genDiff;
