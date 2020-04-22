import DeliveryMethod from "./DeliveryMethod";

const AgreementType = {
    PAPER: 'PAPER',
    DIGITAL: 'DIGITAL',
    fromDeliveryMethodId: (id) => DeliveryMethod.isDigital(id) ? 'DIGITAL' : 'PAPER'
};

export default AgreementType;