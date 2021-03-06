"use strict";

var isWarnedForDeprecation = false;
module.exports = function() {
    return {
        Program() {
            if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
              return;
            }

            /* eslint-disable no-console */
            console.log('The babel/array-bracket-spacing rule is deprecated. Please ' +
                        'use the built in array-bracket-spacing rule instead.');
            /* eslint-enable no-console */
            isWarnedForDeprecation = true;
        }
    };
};

module.exports.schema = [
    {
        "enum": ["always", "never"]
    },
    {
        "type": "object",
        "properties": {
            "singleValue": {
                "type": "boolean"
            },
            "objectsInArrays": {
                "type": "boolean"
            },
            "arraysInArrays": {
                "type": "boolean"
            }
        },
        "additionalProperties": false
    }
];
