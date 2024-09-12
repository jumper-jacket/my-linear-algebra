import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',  // ts-jestを使用
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // TypeScriptファイルを変換
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
