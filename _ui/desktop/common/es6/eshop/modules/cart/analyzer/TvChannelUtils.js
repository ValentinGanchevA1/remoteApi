export const groupChannelsByCategories = (channels) => {
    let categories = {};
    channels.forEach((channel) => {
        let category = channel.categoryList;
        let key = Object.keys(category)[0];
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