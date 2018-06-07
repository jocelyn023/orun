// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'arrow-parents': 0,
    'no-console': "off",//禁用console
    'nu-unused': 0,
    'no-extra-semi': 0,
    'no-dupe-keys': 0,
    'no-mixed-spaces-and-tabs': [0],//关闭禁止混用tab和空格
    'generator-star-spacing': 'off',
    'no-tabs': "off",
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'eslint-disable-next-line': 0,
    'eslint-disable': 0,
    'space-infix-ops': 0,//中缀运算符要不要空格隔开
    'no-trailing-spaces': 0,//一行结束后边不要有空格
    'no-unneeded-ternary': 0,
    'no-eq-null': 0,//禁止对null使用==或!=运算符
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
