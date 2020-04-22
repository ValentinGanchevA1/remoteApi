import $ from 'jquery';

const setSelectedDeviceVariant = deviceVariantId => {
    $(`input[type=radio][name=phoneColorDesktop][value=\"${deviceVariantId}\"]`).click();
    $(`input[type=radio][name=phoneColorMobile][value=\"${deviceVariantId}\"]`).click();
};

export default {
    setSelectedDeviceVariant
}