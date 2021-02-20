import svelte from 'rollup-plugin-svelte';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import livereload from 'rollup-plugin-livereload'

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        name: 'app',
        format: 'esm',
        sourcemap: true,
        dir: 'public/bundle',
        manualChunks: (moduleName) => {
            // Every module whose name includes `node_modules` should be in vendor:
            if (moduleName.includes('node_modules')) {
                return 'vendor'
            }
            // Every other module will be in the chunk based on its entry point!
        },
    },
    preserveEntrySignatures: false,
    plugins: [
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            }
        }),
        css({ output: 'bundle.css' }),
        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        livereload({
            watch: 'public'
        }),

        replace({
            'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
        }),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],

    watch: {
        clearScreen: false
    }
};