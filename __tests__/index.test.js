import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';

import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff nested objects json-json in stylish format', () => {
  expect(
    genDiff(getFixturePath('file1.json'), getFixturePath('file2.json')),
  ).toEqual(readFile('expected.txt'));
});

test('gendiff nested objects yaml-yaml in stylish format', () => {
  expect(
    genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml')),
  ).toEqual(readFile('expected.txt'));
});

test('gendiff nested objects in plain format', () => {
  expect(
    genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain'),
  ).toEqual(readFile('expectedPlainFormat.txt'));
});

test('gendiff nested objects in json format', () => {
  expect(
    genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json'),
  ).toEqual(readFile('expectedJsonFormat.txt'));
});
