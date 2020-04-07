export const forEachObject = (obj, cb) => {
    Object.keys(obj).forEach(function (key) {
        cb(obj[key])
    });
}

export const mapObject = (obj, cb) => {
    return Object.keys(obj).map((key) => cb(obj[key], key));
}