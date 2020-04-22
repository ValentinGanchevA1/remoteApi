const dataLayerMiddleware = (dataLayer, actionsToTrack = {}) => {
    let type = {};

    const calculate = (action, getState) => {
        let counter = type[action.type] || 0;
        type = {
            ...type,
            [action.type]: ++counter
        };

        const nextState = getState();
        const transform = actionsToTrack[action.type];
        // debugger;
        const data = transform(nextState, action, type);

        console.warn("dataLayer middleware data", {
            data,
            type
        });

        data && dataLayer.push(data);
    };

    return ({
        dispatch,
        getState
    }) => next => action => {
        // console.warn("logAction",action.type);
        next(action);
        if (!Object.keys(actionsToTrack).includes(action.type)) {
            return;
        }
        calculate(action, getState);
        // debugger;
    };
};

export default dataLayerMiddleware;