const common = require('../webpack.common');
const production = require('../webpack.prod');
const development = require('../webpack.dev');
const { merge } = require('webpack-merge');

const options = {
  DEV: {
    name: 'development',
    config: merge(common, development),
  },
  PROD: {
    name: 'production',
    config: merge(common, production),
  },
};

const NODE_ENV = process.env.NODE_ENV;

function stringifyList(list, prefix = '', suffix = '') {
  return list.reduce((accum, value, i, { length }) => {
    const returnLine = i === length - 1 ? '' : '\n';

    return accum + prefix + value + suffix + returnLine;
  }, '');
}

function throwEnvError(requestedOption) {
  const optionNames = Object.values(options).map(({ name }) => name);

  throw `Error: No config found for (${requestedOption}).\nAvailable options: \n${stringifyList(optionNames, '\t- ')}`;
}

function findConfigFor(NODE_ENV) {
  for (const option of Object.values(options)) {
    if (option.name === NODE_ENV) return option.config;
  }

  throwEnvError(NODE_ENV);
}

module.exports = findConfigFor(NODE_ENV);
