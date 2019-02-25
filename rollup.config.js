//import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


const extensions = [
    '.js', '.jsx', '.ts', '.tsx', '.svg'
];

export default {
    input: 'src/index.tsx',

    output: [{
        dir: 'lib',
        format: 'es',
    }],

    plugins: [
        peerDepsExternal(),

        //svgr({ babel: false }),

        babel({
            extensions,
            rootMode: 'upward',
            exclude: 'node_modules/**'
        }),
        
        resolve(),

        commonjs(),
    ],
}