try {
    require.config({
        'paths': {
            'opl-cim-presales-orange-finance': '/oplpresales/js/opl-cim-presales-orange-finance-form',
            'opl-cim-presales': '/oplpresales/js/opl-cim-presales-form',
            'jquery.serialize-object': '../common/lib/jquery-serialize-object/jquery.serialize-object'
        }
    });
} catch (e) {
    if (e instanceof ReferenceError) {
        document.addEventListener('framework.ready', function() {
            require.config({
                'paths': {
                    'opl-cim-presales-orange-finance': '/oplpresales/js/opl-cim-presales-orange-finance-form',
                    'opl-cim-presales': '/oplpresales/js/opl-cim-presales-form',
                    'jquery.serialize-object': '../common/lib/jquery-serialize-object/jquery.serialize-object'
                }
            });
        });
    }
}