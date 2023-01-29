import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Happy UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  base: '/happy-ui', // 此处更换为自己的仓库名
  publicPath: '/happy-ui/', // 此处更换为自己的仓库名
});