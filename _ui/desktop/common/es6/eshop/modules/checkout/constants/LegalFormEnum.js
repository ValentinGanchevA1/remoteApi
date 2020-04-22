import _ from "lodash";

const LegalForm = {
    JDG: 'JDG',
    SC: 'SC',
    SZOO: 'SZOO',
    SA: 'SA',
    SK: 'SK',
    SKA: 'SKA',
    SJ: 'SJ',
    SP: 'SP',
    FUN: 'FUN',
    STOW: 'STOW',
    PAN: 'PAN',
    INNA: 'INNA',
    isSmallBusiness: legalForm => _.includes(['JDG', 'SC'], legalForm)
};

export default LegalForm;