import _ from 'lodash';

const presentValue = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  if (_.isString(val)) {
    return `'${val}'`;
  }
  return val;
};

const plain = (diff) => {
  const plainDiff = (tree, complexName = []) => {
    const result = tree.flatMap((node) => {
      const { name, value, type } = node;
      const makePath = [...complexName, name];
      switch (type) {
        case 'added':
          return `Property '${makePath.join(
            '.',
          )}' was added with value: ${presentValue(value)}`;
        case 'deleted':
          return `Property '${makePath.join('.')}' was removed`;
        case 'nested':
          return plainDiff(value, makePath);
        case 'changed':
          return `Property '${makePath.join(
            '.',
          )}' was updated. From ${presentValue(node.value1)} to ${presentValue(
            node.value2,
          )}`;
        case 'unchanged':
          return [];
        default:
          throw new Error(`Type: ${type} is undefined`);
      }
    });
    return result.join('\n');
  };
  return plainDiff(diff);
};

export default plain;
