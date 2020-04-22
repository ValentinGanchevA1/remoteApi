import OraAppActions from "./OraAppActions";
import OraServerActions from "./OraSerwerActions";
import OraFailureActions from "./OraFailureActions";
import OraPageActions from "./OraPageActions";
import OraConfigActions from "./OraConfigActions";

let OraActions = {
    app: OraAppActions,
    server: OraServerActions,
    error: OraFailureActions,
    goto: OraPageActions,
    config: OraConfigActions
};

export default OraActions;