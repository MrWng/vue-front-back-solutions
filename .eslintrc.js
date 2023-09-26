module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: [
        'src/views/index.vue',
        'src/views/**/index.vue',
        'src/components/**/index.vue',
        'src/layout/**/index.vue'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
