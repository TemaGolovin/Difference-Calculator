import yaml from 'js-yaml';

const parses = (file, format) => {
  if (format === '.json') {
    return JSON.parse(file);
  }
  return yaml.load(file);
};

export default parses;
