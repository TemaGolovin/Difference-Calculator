import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

import genDiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8");

test("gendiff flat files", () => {
  expect(
    genDiff(
      getFixturePath("file1.json").trim(),
      getFixturePath("file2.json").trim()
    )
  ).toEqual(readFile("expected.txt").trim());
});
