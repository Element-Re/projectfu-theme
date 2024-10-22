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