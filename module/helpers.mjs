/**
 * Recursive version of Object.freeze.
 * @param {object} obj The object to freeze.
 * @returns {object} The object that was passed in, now deep frozen.
 */
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

/**
 * Helper for reading string content out of a text file.
 * 
 * @param {string} file The path to the file.
 * @returns {string} The text content read from the file.
 */
export function readTextFromFile(file) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = ev => {
      resolve(reader.result);
    };
    reader.onerror = ev => {
      reader.abort();
      reject();
    };
    reader.readAsText(file);
  });
}