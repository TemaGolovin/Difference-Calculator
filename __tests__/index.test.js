import fs from "fs";
import path, { dirname } from "path";
import { test, expect } from "@jest/globals";

import { fileURLToPath } from "url";

import genDiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8");

test("gendiff flat files json-json", () => {
  expect(
    genDiff(getFixturePath("file1.json"), getFixturePath("file2.json"))
  ).toEqual(readFile("expected.txt"));
});

test("gendiff flat files yaml-yaml", () => {
  expect(
    genDiff(getFixturePath("file3.yaml"), getFixturePath("file4.yaml"))
  ).toEqual(readFile("expected.txt"));
});
