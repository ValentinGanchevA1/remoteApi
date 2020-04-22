import _ from "lodash";

const ProcessTypeEnum = {
    UNKNOWN: 'UNKNOWN',
    _2U: '2U',
    _4U: '4U',
    _2ULTE: '2ULTE',
    _3ULTE: '3ULTE',
    ACTIVATION: 'ACTIVATION',
    ACTIVATION_WITH_NP_INT: 'ACTIVATION_WITH_NP_INT',
    ACTIVATION_NNAKED: 'ACTIVATION_NNAKED',
    TERMINATION: 'TERMINATION',
    TERMINATION_DATA: 'TERMINATION_DATA',
    ASSIGNMENT_B2C_JDG: 'ASSIGNMENT_B2C_JDG',
    isLTE: (process) => _.includes(['2ULTE', '3ULTE'], process)
};

export default ProcessTypeEnum;