module.exports = {
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
    // 'plugin:vue/essential',
        'plugin:vue/vue3-strongly-recommended',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'vue/multi-word-component-names': 0,
        'vue/no-multiple-template-root': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 10
            },
            multiline: {
                max: 10
            }
        }],
        'vue/no-v-html': 'off',
        'vue/html-self-closing': 'off',
        'vue/attributes-order': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/order-in-components': 'off',
        'vue/html-closing-bracket-newline': 'off',
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        semi: [2, 'never'],
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'no-useless-escape': 'off',
        'symbol-description': 'off'
    },
    overrides: [
        {
            files: ['src/api/**/*.ts'],
            rules: {
                camelcase: 'off'
            }
        }
    ]
}
