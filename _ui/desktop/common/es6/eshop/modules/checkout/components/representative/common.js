export const getCommonPropsForInput = (props, name, prefix, options) => {
    const index = props.index;
    const composedName = prefix + "-" + index + "-" + name;
    const errors = (props.errors && props.errors[name]) || [];
    const valid = errors.length == 0;
    return {
        name: composedName,
        id: composedName,
        value: props[name] || "",
        errors,
        labelType: "floating",
        onBlur: (args) => {
            const value = args.value;
            props.onChange({
                index,
                name,
                value,
                validate: true
            }); //with validation
        },
        onChange: (args) => {
            const value = args.value;
            props.onChange({
                index,
                name,
                value,
                validate: false
            }); // no validation
        },
        validationMark: true,
        valid,
        ...options
    };
};