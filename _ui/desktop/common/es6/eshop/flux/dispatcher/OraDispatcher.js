var OraDispatcher = function(OraDispatcher) {

    var _prefix = "ID_";
    var _callbacks = {};
    var _isDispatching = false;
    var _isHandled = {};
    var _isPending = {};
    var _pending = {};
    var _lastID = 1;

    /**
     * Registers a callback to be invoked with every dispatched payload. Returns
     * a token that can be used with `waitFor()`.
     */
    OraDispatcher.register = function(callback) {
        var id = _prefix + _lastID++;
        _callbacks[id] = callback;
        return id;
    };

    /**
     * Removes a callback based on its token.
     */
    OraDispatcher.unregister = function(id) {
        console.assert(!!_callbacks[id], "Dispatcher.unregister: No store registered under id `%s`.", id);
        delete _callbacks[id];
    };

    /**
     * Waits for the callbacks specified to be invoked before continuing execution
     * of the current callback. This method should only be used by a callback in
     * response to a dispatched payload.
     */
    OraDispatcher.waitFor = function(ids) {
        console.assert(_isDispatching, "Dispatcher.waitFor: invoked while not dispatching.");
        for (var ii = 0; ii < ids.length; ii++) {
            var id = ids[ii];
            if (_isPending[id]) {
                console.assert(_isHandled[id], "Dispatcher.waitFor: Circular dependency waiting for `%s`.", id);
                continue;
            }
            console.assert(!!_callbacks[id], "Dispatcher.waitFor: No store registered under id `%s`.", id);
            _invokeCallback(id);
        }
    };

    /**
     * Dispatches a payload to all registered callbacks.
     */
    OraDispatcher.dispatch = function(payload) {
        console.log(`Dispatching action ${payload.type}. Payload:`, payload);
        console.assert(!_isDispatching, "Already dispatching action %s.", _isDispatching ? _pending.payload.type : null);
        _startDispatching(payload);
        try {
            for (var id in _callbacks) {
                //                console.log(`Action processed: id:${id}`, id);

                if (_isPending[id]) {
                    //               console.log(`Action: id:${id}, is pending.`, id);
                    continue;
                }
                //                console.log(`Action: id:${id}, is not  pending.`, id);
                _invokeCallback(id);
            }
        } finally {
            console.log(`Stop dispatching action ${payload.type}. Payload:`, payload);
            _stopDispatching();
        }
    };

    /**
     * Is Dispatcher currently dispatching.
     */
    OraDispatcher.isDispatching = function() {
        return _isDispatching;
    };

    /**
     * Call the callback stored with the given id. Also do some internal
     * bookkeeping.
     */
    function _invokeCallback(id) {
        _isPending[id] = true;
        try {
            _callbacks[id](_pending.payload);
        } catch (e) {
            console.log(`Error while invoking store action handler: ${e}\n ${e.stack}`);
        }
        _isHandled[id] = true;
    }

    /**
     * Set up bookkeeping needed when dispatching.
     */
    function _startDispatching(payload) {
        for (var id in _callbacks) {
            _isPending[id] = false;
            _isHandled[id] = false;
        }
        _pending.payload = payload;
        _isDispatching = true;
    }

    /**
     * Clear bookkeeping used for dispatching.
     */
    function _stopDispatching() {
        delete _pending.payload;
        _isDispatching = false;
    }

    return OraDispatcher;
}({});

export default OraDispatcher;