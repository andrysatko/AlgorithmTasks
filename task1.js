// Задача: не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY:

// Повторювана логіка -  (отримання масиву ключів, майже однакові змінні, крім styleState, однакова ітерація і запис)
// util function  
function assignStyles(styles, writeCallback) {
    var
        keys = Object.keys(styles),
        i,
        key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        writeCallback(key);
    }
}

ctx.prototype.__applyStyleState = function (styleState) {
    assignStyles(STYLES, (key) => this[key] = styleState[key]);
}
// ctx.prototype.__applyStyleState = function (styleState) {
//     var
//         keys = Object.keys(styleState),
//         i,
//         key;
//     for (i = 0; i < keys.length; i++) {
//         key = keys[i];
//         this[key] = styleState[key];
//     }
// };

ctx.prototype.__setDefaultStyles = function () {
    assignStyles(STYLES, (key) => this[key] = STYLES[key].canvas)
}
// ctx.prototype.__setDefaultStyles = function () {
//     var
//         keys = Object.keys(STYLES),
//         i,
//         key; // keys of object - object selection
//     for (i = 0; i < keys.length; i++) {
//         key = keys[i];
//         this[key] = STYLES[key].canvas; // field selection
//     }
// };

ctx.prototype.__getStyleState = function () {
    var styleState = {};
    assignStyles(STYLES, (key) => styleState[key] = this[key])
}
// ctx.prototype.__getStyleState = function () {
//     var
//         keys = Object.keys(STYLES),
//         i,
//         key,
//         styleState = {}; // додаткова зміна
//     for (i = 0; i < keys.length; i++) {
//         key = keys[i];
//         styleState[key] = this[key]; // свапнуті ключ значення ніж в інших методах
//     }
//     return styleState;
// };