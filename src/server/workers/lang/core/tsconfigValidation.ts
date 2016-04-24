import simpleValidator = require('./simpleValidator');

const types = simpleValidator.types;
const compilerOptionsValidation: simpleValidator.ValidationInfo = {
    members: {
        allowNonTsExtensions: { type: types.boolean },
        allowSyntheticDefaultImports: { type: types.boolean },
        allowUnreachableCode: { type: types.boolean },
        allowUnusedLabels: { type: types.boolean },
        charset: { type: types.string },
        codepage: { type: types.number },
        declaration: { type: types.boolean },
        diagnostics: { type: types.boolean },
        emitBOM: { type: types.boolean },
        experimentalAsyncFunctions: { type: types.boolean },
        experimentalDecorators: { type: types.boolean },
        emitDecoratorMetadata: { type: types.boolean },
        help: { type: types.boolean },
        inlineSourceMap: { type: types.boolean },
        inlineSources: { type: types.boolean },
        isolatedModules: { type: types.boolean },
        jsx: { type: types.string, validValues: ['preserve', 'react'] },
        locals: { type: types.string },
        listFiles: { type: types.boolean },
        mapRoot: { type: types.string },
        module: { type: types.string, validValues: ['commonjs', 'amd', 'system', 'umd', 'es6', 'es2015'] },
        moduleResolution: { type: types.string, validValues: ['classic', 'node'] },
        newLine: { type: types.string },
        noEmit: { type: types.boolean },
        noEmitHelpers: { type: types.boolean },
        noEmitOnError: { type: types.boolean },
        noErrorTruncation: { type: types.boolean },
        noFallthroughCasesInSwitch: { type: types.boolean },
        noImplicitAny: { type: types.boolean },
        noImplicitReturns: { type: types.boolean },
        noLib: { type: types.boolean },
        noLibCheck: { type: types.boolean },
        noResolve: { type: types.boolean },
        out: { type: types.string },
        outFile: { type: types.string },
        outDir: { type: types.string },
        preserveConstEnums: { type: types.boolean },
        removeComments: { type: types.boolean },
        rootDir: { type: types.string },
        sourceMap: { type: types.boolean },
        sourceRoot: { type: types.string },
        stripInternal: { type: types.boolean },
        suppressExcessPropertyErrors: { type: types.boolean },
        suppressImplicitAnyIndexErrors: { type: types.boolean },
        target: { type: types.string, validValues: ['es3', 'es5', 'es6'] },
        version: { type: types.boolean },
        watch: { type: types.boolean },
    },
    extraMembers: []
}

const validator = new simpleValidator.SimpleValidator(compilerOptionsValidation);

export const validate = validator.validate;