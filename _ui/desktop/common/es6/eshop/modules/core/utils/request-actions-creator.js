export const createRequestActionTypes = (name) => ({
    start: `${name}_REQUEST_START`,
    success: `${name}_REQUEST_SUCCESS`,
    error: `${name}_REQUEST_ERROR`,
    reset: `${name}_REQUEST_RESET`
});

export function createRequestActions(types) {
    return {
        start: (payload) => ({
            type: types.start,
            payload
        }),
        success: (payload) => ({
            type: types.success,
            payload
        }),
        error: (error) => ({
            type: types.error,
            error: error && error.errorMessage
        }),
        reset: () => ({
            type: types.reset
        })
    };
}