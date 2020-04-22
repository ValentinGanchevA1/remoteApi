export const formatNumber = (value, pattern) => {
    let i = 0;
    return value && pattern.replace(/#/g, _ => value[i++]);
};