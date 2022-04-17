/**
 * Возвращает куку с заданным именем
 *
 * @param {string} name
 * @returns {string}
 */
export const getCookie = (name) => {
    const regexp = `(?:^|; )${name.replace(/([\\.$?*|{}\\(\\)\\[\]\\\\/\\+^])/g, '\\$1')}=([^;]*)`;
    const matches = document.cookie.match(new RegExp(regexp));

    return matches ? decodeURIComponent(matches[1]) : undefined;
};

/**
 * Устанавливает куку с заданным именем, значением опциями.
 *
 * @param {string} name
 * @param {string|object} value
 * @param {Object} [options]
 */
export const setCookie = (name, value, options = {}) => {
    // eslint-disable-next-line no-param-reassign
    options = {
        path: '/',
        ...options,
    };

    if (options.expires instanceof Date) {
        // eslint-disable-next-line no-param-reassign
        options.expires = options.expires.toUTCString();
    }

    let updateCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const optionKey in options) {
        updateCookie += `; ${optionKey}`;

        const optionsValue = options[optionKey];

        if (optionsValue !== true) {
            updateCookie += `=${optionsValue}`;
        }
    }

    document.cookie = updateCookie;
};
