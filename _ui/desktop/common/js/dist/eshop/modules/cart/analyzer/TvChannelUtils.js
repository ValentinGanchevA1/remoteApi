define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.groupChannelsByCategories = void 0;

    var groupChannelsByCategories = function groupChannelsByCategories(channels) {
        var categories = {};
        channels.forEach(function(channel) {
            var category = channel.categoryList;
            var key = Object.keys(category)[0];

            if (!Object.keys(categories).includes(key)) {
                categories[key] = {
                    label: category[key],
                    channels: []
                };
            }

            categories[key].channels.push(channel);
        });
        return categories;
    };

    _exports.groupChannelsByCategories = groupChannelsByCategories;
});
//# sourceMappingURL=TvChannelUtils.js.map