export const createCMSDescriptionWithParams = (description, params) => {
    let result = description;
    description && params && params.map((param, i) => {
        result = result.replace(new RegExp("\\{" + i + "\\}", "g"), param);
    });
    return result;
};