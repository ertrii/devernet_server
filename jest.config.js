module.exports = {
    roots: ['<rootDir>/__test__'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.graphql$": "graphql-import-node/jest"
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
