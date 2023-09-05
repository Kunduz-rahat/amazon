"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = void 0;
const translit = (str) => {
    const ru = 'А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-Ь-ь-Р-р-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Э-э-Ю-ю-Я-я'.split('-');
    const en = 'A-a-B-b-V-v-G-g-D-d-E-e-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h'.split('-');
    let result = '';
    for (let index = 0, l = str.length; index < l; index++) {
        const s = str.charAt(index), n = ru.indexOf(s);
        if (n >= 0) {
            result += en[n];
        }
        else {
            result += s;
        }
    }
    return result;
};
const generateSlug = (str) => {
    let url = str.replace(/[\s]+/gi, '-');
    url = translit(url);
    url = url
        .replace(/[0-9a-z_\-] + /gi, '')
        .replace('---', '-')
        .replace('--', '-')
        .toLowerCase();
    return url;
};
exports.generateSlug = generateSlug;
//# sourceMappingURL=generate-slug.js.map