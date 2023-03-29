import url from 'node:url';
import { ESLint } from 'eslint';

const rootDir = url.fileURLToPath(new URL('..', import.meta.url));

export function getConfigForFile({
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
  return eslint.calculateConfigForFile(targetFile);
}

export function removeAbsolutePath(pathToFile: string, replacement = '') {
  return pathToFile.replace(rootDir, replacement);
}
