import _ from "lodash";

const DeliveryMethod = {
    COURIER: 'courier',
    PICKUP_ORANGE: 'pickup_orange',
    PICKUP_FROM_SHELF: 'pickup_from_shelf',
    TECHNICAL_ASSISTANT: 'technical_assistant',
    POS: 'POS',
    PARCEL_LOCKER: 'parcel_locker',
    PICKUP_ON_EMAIL: 'pickup_on_email',
    PAPER: 'paper',
    BZU: 'BZU',
    ACCOUNT_MANAGER: 'account_manager',
    isDigital: (deliveryMethod) => _.includes(['pickup_on_email', 'BZU'], deliveryMethod),
    isPaper: (deliveryMethod) => !_.includes(['pickup_on_email', 'BZU'], deliveryMethod)
};

export default DeliveryMethod;