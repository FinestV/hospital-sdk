'use strict';
//import svgr from '@svgr/rollup';
import importCwd from 'import-cwd';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
//import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
//import pkg from './package.json';

const pkg = importCwd('./package.json');

const dev = 'development';
const prod = 'production';
const nodeEnv = parseNodeEnv(process.env.NODE_ENV);

const extensions = [
    '.js', '.jsx', '.ts', '.tsx', '.svg'
];

const external = pkg.peerDependencies && Object.keys(pkg.peerDependencies);
//const sourceMap = nodeEnv === dev ? 'inline' : false;

const plugins = [
    replace({
        // replace process.env.NODE_ENV with the actual value
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),

    resolve({
        extensions,
    }),

    svgr(),
    
    babel({
        extensions,
        rootMode: 'upward',
        exclude: 'node_modules/**'
    }),

    commonjs({
        // all of our own sources will be ES modules, so only node_modules need to be resolved with cjs
        include: 'node_modules/**',
    }),
];

export default {
    input: 'src/index.tsx',
    output: [{ file: pkg.main, format: 'es' }],
    external,
    plugins,
}



// export default {
//     input: 'src/index.tsx',

//     output: [{
//         dir: 'lib',
//         format: 'es',
//     }],

//     external,

//     plugins: [
//         //peerDepsExternal(),

//         //svgr({ babel: false }),
//         replace({
//             // replace process.env.NODE_ENV with the actual value
//             'process.env.NODE_ENV': JSON.stringify(nodeEnv),
//         }),

//         resolve({
//             extensions: extensions,
//         }),
        
//         commonjs({
//             // all of our own sources will be ES modules, so only node_modules need to be resolved with cjs
//             include: 'node_modules/**',
//         }),

//         babel({
//             extensions: extensions,
//             rootMode: 'upward',
//             exclude: 'node_modules/**'
//         }),
        

//     ],
// }

function parseNodeEnv(nodeEnv) {
    if (!!nodeEnv && (nodeEnv.trim() === prod || nodeEnv.trim() === dev)) {
        return nodeEnv.trim();
    }
    return dev;
}