import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

// Включаем headless-режим, если переменная окружения HEADLESS=true
// Пример запуска: HEADLESS=true npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// Включаем все общие плагины CodeceptJS
// Документация: https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export default {
  tests: './CodeceptJS/*_test.js',
  output: './CodeceptJS/output',
  helpers: {
    Puppeteer: {
      url: 'http://example.com',
      show: true,
      windowSize: '1200x900',
    },
  },
  include: {
    I: './CodeceptJS/steps_file.js',
  },
  name: 'AutomationTestingJS',
};
