export function cbsKey(postalCode, city) {
    return !postalCode ? null : (postalCode + (!city ? "" : "#" + city.toUpperCase()));
}

const postalCodeRegex = /^\d{5}$/;
export function isValidPostalCode(postalCode) {
    return postalCodeRegex.test(postalCode);
}

export function formatPostalCode(postalCode) {
    return postalCode.slice(0, 2) + "-" + postalCode.slice(2);
}