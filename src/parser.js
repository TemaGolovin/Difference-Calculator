import yaml from 'js-yaml';

const parser = (data, format) => {
  if (format === '.json') {
    return JSON.parse(data);
  }
  return yaml.load(data);
};

export default parser;
