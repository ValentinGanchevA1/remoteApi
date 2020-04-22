define(["exports"], function(s) {
    "use strict";

    function t(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            s && (t = t.filter(function(s) {
                return Object.getOwnPropertyDescriptor(e, s).enumerable
            })), a.push.apply(a, t)
        }
        return a
    }

    function e(e) {
        for (var s = 1; s < arguments.length; s++) {
            var a = null != arguments[s] ? arguments[s] : {};
            s % 2 ? t(Object(a), !0).forEach(function(s) {
                babelHelpers.defineProperty(e, s, a[s])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function(s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
            })
        }
        return e
    }
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.attributesForFront = s.productFeatures = s.productFeatures_ = void 0;
    var a = {
        Description_Long_table: '[{ "key": "Internet w&nbsp;telefonie w&nbsp;ramach abonamentu", "value": "2&nbsp;GB"},{ "key": "Dodatkowy pakiet internetu w&nbsp;telefonie", "value": "2&nbsp;GB za&nbsp;10&nbsp;zł"},{ "key": "Rozmowy do&nbsp;wszystkich w&nbsp;sieci", "value": "bez limitu"},{ "key": "SMS", "value": "0,16&nbsp;zł/szt."},{ "key": "MMS", "value": "0,16&nbsp;zł/szt."},{ "key": "Rozmowy w&nbsp;Roamingu w&nbsp;UE", "value": "30&nbsp;min. za 0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Internet w&nbsp;telefonie w&nbsp;Roamingu w&nbsp;UE", "value": "50&nbsp;MB za 0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Rozmowy międzynarodowe w&nbsp;Strefie&nbsp;1", "value": "40&nbsp;min. za&nbsp;0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Rabat za&nbsp;e-fakturę i&nbsp;terminowe płatności", "value": "5,01&nbsp;zł"},{ "key": "Rabat za&nbsp;wyrażenie zgody marketingowej", "value": "4,99&nbsp;zł"}]',
        data_desc: '10/<span class="opl-box__dataplan-badge__value">X</span><span class="opl-box__dataplan-badge__suffix">GB</span>',
        data_desc_short: '<div class="opl-box__icon-list__icon"><span class="opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle"><span class="opl-box__dataplan-badge__value">X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text"><span class="u-font-bold">test</span></div>',
        retention_desc: '<div class="opl-box__icon-list__item g-yellowf-bg"><div class="opl-box__icon-list__icon u-padding-left-l"><span class="opl-box__dataplan-badge"><span class="opl-box__dataplan-badge__value">+X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text u-padding-right-l"><span/><span><span class="u-font-bold">retention desc test</span></span></div></div>',
        retention_desc_short: '<li class="opl-box__icon-list__item g-yellowf-bg"><div class="opl-box__icon-list__icon "><span class="opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle"><span class="opl-box__dataplan-badge__value">+X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text "><span><span class="u-font-bold">testowy<br>wpis</span></span></div></li>',
        voice_desc: "<span>Wpis testowy <b>bez limitu</b></span>",
        voice_desc_short: "<span><b>test</b></span>",
        sms_mms_desc: "<span>Wpis testowy <b>bez limitu</b></span>",
        sms_mms_desc_short: "<span><b>test</b></span>",
        mnp_price_desc: '<p id=TOOLTIP-ID-PLACEHOLDER class="u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg">MNP desc test<span aria-hidden="true" class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer" title=""/><span class="o-tooltip__content o-tooltip__content--focusable">MNP tooltip test</span></p>',
        convergent_price_desc: '<p id=TOOLTIP-ID-PLACEHOLDER class="u-padding" >Convergence price desc<span aria-hidden="true" class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer" title=""/><span class="o-tooltip__content o-tooltip__content--focusable">Convergence tooltip test</span></p>'
    };
    s.productFeatures_ = a;
    var n = {
        Description_Long_table: [{
            attribute: "Description_Long_table",
            value: '[{ "key": "Internet w&nbsp;telefonie w&nbsp;ramach abonamentu", "value": "2&nbsp;GB"},{ "key": "Dodatkowy pakiet internetu w&nbsp;telefonie", "value": "2&nbsp;GB za&nbsp;10&nbsp;zł"},{ "key": "Rozmowy do&nbsp;wszystkich w&nbsp;sieci", "value": "bez limitu"},{ "key": "SMS", "value": "0,16&nbsp;zł/szt."},{ "key": "MMS", "value": "0,16&nbsp;zł/szt."},{ "key": "Rozmowy w&nbsp;Roamingu w&nbsp;UE", "value": "30&nbsp;min. za 0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Internet w&nbsp;telefonie w&nbsp;Roamingu w&nbsp;UE", "value": "50&nbsp;MB za 0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Rozmowy międzynarodowe w&nbsp;Strefie&nbsp;1", "value": "40&nbsp;min. za&nbsp;0&nbsp;zł przez 1&nbsp;mc, potem 10&nbsp;zł/mc"},{ "key": "Rabat za&nbsp;e-fakturę i&nbsp;terminowe płatności", "value": "5,01&nbsp;zł"},{ "key": "Rabat za&nbsp;wyrażenie zgody marketingowej", "value": "4,99&nbsp;zł"}]'
        }],
        data_desc: [{
            attribute: "data_desc",
            value: '10/<span class="opl-box__dataplan-badge__value">X</span><span class="opl-box__dataplan-badge__suffix">GB</span>'
        }],
        data_desc_short: [{
            attribute: "data_desc_short",
            value: '<div class="opl-box__icon-list__icon"><span class="opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle"><span class="opl-box__dataplan-badge__value">X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text"><span class="u-font-bold">test</span></div>'
        }],
        retention_desc: [{
            attribute: "retention_desc",
            value: '<div class="opl-box__icon-list__item g-yellowf-bg"><div class="opl-box__icon-list__icon u-padding-left-l"><span class="opl-box__dataplan-badge"><span class="opl-box__dataplan-badge__value">+X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text u-padding-right-l"><span/><span><span class="u-font-bold">retention desc test</span></span></div></div>'
        }],
        retention_desc_short: [{
            attribute: "retention_desc_short",
            value: '<li class="opl-box__icon-list__item g-yellowf-bg"><div class="opl-box__icon-list__icon "><span class="opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle"><span class="opl-box__dataplan-badge__value">+X</span><span class="opl-box__dataplan-badge__suffix">GB</span></span></div><div class="opl-box__icon-list__text "><span><span class="u-font-bold">testowy<br>wpis</span></span></div></li>'
        }],
        voice_desc: [{
            attribute: "voice_desc",
            value: "<span>Wpis testowy <b>bez limitu</b></span>"
        }],
        voice_desc_short: [{
            attribute: "voice_desc_short",
            value: "<span><b>test</b></span>"
        }],
        sms_mms_desc: [{
            attribute: "sms_mms_desc",
            value: "<span>Wpis testowy <b>bez limitu</b></span>"
        }],
        sms_mms_desc_short: [{
            attribute: "sms_mms_desc",
            value: "<span><b>test</b></span>"
        }],
        mnp_price_desc: [{
            attribute: "mnp_price_desc",
            value: '<p id=TOOLTIP-ID-PLACEHOLDER class="u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg">MNP desc test<span aria-hidden="true" class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer" title=""/><span class="o-tooltip__content o-tooltip__content--focusable">MNP tooltip test</span></p>'
        }],
        convergent_price_desc: [{
            attribute: "convergent_price_desc",
            value: '<p id=TOOLTIP-ID-PLACEHOLDER class="u-padding" >Convergence price desc<span aria-hidden="true" class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer" title=""/><span class="o-tooltip__content o-tooltip__content--focusable">Convergence tooltip test</span></p>'
        }]
    };
    s.productFeatures = n;
    var p = {
        boxFeatures: [e({}, a.data_desc, {
            type: "bar"
        }), e({}, a.retention_desc, {
            type: "static",
            processes: ["MNP"]
        }), e({}, a.voice_desc, {
            type: "static",
            icon: "unlimited-calls"
        }), e({}, a.sms_mms_desc, {
            type: "static",
            icon: "SMS"
        })],
        badgeFeatures: [e({}, a.data_desc_short, {
            type: "static"
        }), e({}, n.retention_desc_short, {
            type: "static",
            processes: ["MNP"]
        }), e({}, n.voice_desc_short, {
            type: "static",
            icon: "unlimited-calls"
        }), e({}, n.sms_mms_desc_short, {
            type: "static",
            icon: "SMS"
        })],
        promotionFeatures: [e({}, n.convergent_price_desc, {
            type: "static",
            clientContext: !0
        }), e({}, n.mnp_price_desc, {
            type: "static",
            processes: ["MNP"]
        })]
    };
    s.attributesForFront = p
});
//# sourceMappingURL=mockData.js.map