import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
    eslintConfigPrettier,
    {
        plugins: {
            '@typescript-eslint': tsEslintPlugin,
            'eslint-plugin-prettier': eslintPluginPrettier,
            'eslint-plugin-astro': eslintPluginAstro,
        },
        ignores: ['node_modules/*', 'dist/*'],
    },
]
