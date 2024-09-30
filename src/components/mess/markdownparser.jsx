function ParseSentence({ str, inline = false }) {
    let currentStr = str;
    let newStr = null;
    let afterStr = null;
    let isStrong = false;
    let isItalic = false;
    let isCode = false;
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

    do {
        afterStr = currentStr;
        if (isCode) {
            newStr = currentStr.replace('`', '</span>');
            currentStr = newStr;
            isCode = false;
        } else {
            newStr = currentStr.replace('`', '<span>');
            currentStr = newStr;
            isCode = true;
        }
    } while (afterStr !== currentStr);

    if (inline) {
        return (<p style={{ display: 'inline' }} dangerouslySetInnerHTML={{ __html: newStr }}></p>);
    }

    return (<p dangerouslySetInnerHTML={{ __html: newStr }}></p>);
}

export default ParseSentence;