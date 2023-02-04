import _ from 'lodash';

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

  export default findDiff;