import yaml from 'js-yaml';

const parser = (file, format) => {
  if (format === '.json') {
    return JSON.parse(file);
  }
  return yaml.load(file);
};

export default parser;
