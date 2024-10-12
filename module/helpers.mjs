// Recursive version of Object.freeze
export function deepFreeze(obj) {
    Object.keys(obj).forEach((property) => {
        if (typeof obj[property] === "object"
            && obj[property] !== null &&
            !Object.isFrozen(obj[property])) {
            deepFreeze(obj[property]);
        }
    });
    return Object.freeze(obj);
};
export const ruleMatcher = /^--[\w-]+:\s*[^;\n]+?;$/;