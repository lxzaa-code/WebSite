export function parseSentence(str) {
    let currentStr = str;
    let newStr = null;
    let afterStr = null;
    let isStrong = false;
    let isItalic = false;
    do {
        afterStr = currentStr;
        if (isStrong) {
            newStr = currentStr.replace('**', '</strong>');
            currentStr = newStr;
            isStrong = false;
        } else {
            newStr = currentStr.replace('**', '<strong>');
            currentStr = newStr;
            isStrong = true;
        }
    } while (afterStr !== currentStr);

    do {
        afterStr = currentStr;
        if (isItalic) {
            newStr = currentStr.replace('*', '</i>');
            currentStr = newStr;
            isItalic = false;
        } else {
            newStr = currentStr.replace('*', '<i>');
            currentStr = newStr;
            isItalic = true;
        }
    } while (afterStr !== currentStr);

    return newStr;
}