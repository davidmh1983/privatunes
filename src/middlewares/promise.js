export default store => next => action => {
    debugger;
    if (!action.then) {
        return next(action);
    }

    return action.then(({ type, payload }) => {
        store.dispatch({
            type,
            payload
        });
    });
};