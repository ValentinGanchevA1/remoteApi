var additionalAuthorization;
UX.require(['grants/additionalAuthorizationObject', 'grants/pubsubevents', 'core/modules/modal'],
    function(additionalAuthorizationObject, pubsubevents) {

        UX.use(function() {
            pubsubevents.initSubscriber("additionalAuthorizationInit");
            additionalAuthorization = additionalAuthorizationObject.createAuthorizationObject();
        });

    });