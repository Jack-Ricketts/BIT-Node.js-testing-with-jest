function isValidUsername(text) {
    if (typeof text !== 'string') {
        return 'Netinkamo tipo parametras';
    }
    if (text.length < 4) {
        return 'Per trumpas';
    }
    if (text.length > 21) {
        return 'Per ilgas';
    }
    return true;
}

module.exports = isValidUsername;