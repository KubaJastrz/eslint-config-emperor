import url from 'node:url';
import { ESLint } from 'eslint';

const rootDir = url.fileURLToPath(new URL('../../..', import.meta.url));

export async function getConfigForFile({
  baseConfig,
  targetFile,
}: {
  baseConfig: any;
  targetFile: string;
}) {
  const eslint = new ESLint({
    baseConfig,
    useEslintrc: false,
    cwd: rootDir,
  });
  const config = await eslint.calculateConfigForFile(targetFile);
  config.parser = removeAbsolutePath(config.parser);
  return config;
}

export function removeAbsolutePath(pathToFile: string, replacement = '<root>/') {
  return pathToFile?.replace(rootDir, replacement) ?? pathToFile;
}
