import { defineConfig } from 'dumi';

const repo = 'Blogs'; // 项目名(也就是你的仓库名)

export default defineConfig({
  title: 'Js-Ban',
  mode: 'site',
  // more config: https://d.umijs.org/config
  devServer: {
    port: 1998, // 自定义端口号
  },
  // base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
