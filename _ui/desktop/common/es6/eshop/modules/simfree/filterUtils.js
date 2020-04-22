export function manageMultiValue(actualFilters, element, parent) {
    let mapElement = actualFilters[parent];
    if (!mapElement || mapElement == "") {
        actualFilters[parent] = element;
    } else {
        if (("," + mapElement + ",").indexOf("," + element + ",") !== -1) {
            mapElement = "," + mapElement + ",";
            mapElement = mapElement.replace(("," + element + ","), ",");
            mapElement = mapElement.substring(1, mapElement.length);
            mapElement = mapElement.substring(0, mapElement.length - 1);
            actualFilters[parent] = mapElement;
        } else {
            actualFilters[parent] = mapElement + "," + element;
        }
    }
}

export function createMapFromObject(filter) {
    var filters = new Map(
        Object
        .keys(filter)
        .map(
            key => [key, filter[key]]
        )
    )
    return filters;
}

export default {
    manageFilter: (actualFilters, element, parent, multiValue, operation, categoryFilters) => {
        if (!multiValue) {
            actualFilters[parent] = element;
        } else {
            manageMultiValue(actualFilters, element, parent);
            // check empty multi value. Required in case of HTTP 500 error for request with empty values
            if (actualFilters[parent] === "") {
                delete actualFilters[parent]
            }
        }
        Object.keys(actualFilters).forEach((key, index) => {
            let toRemove = true;
            if (categoryFilters) {
                categoryFilters.forEach((element) => {
                    if (element.code === key) {
                        toRemove = false;
                    }
                });
            }
            if (toRemove === true) {
                delete actualFilters[key];
            }

        });
        return actualFilters;
    },
    manageNumberFilter: (actualAttrNumberFilters, type, value, element, categoryFilters) => {
        actualAttrNumberFilters[element.code + "_" + type] = value;
        return actualAttrNumberFilters;

    },
    manageMatchToData(selectedModel, checked, matchToData, matchToFilter) {
        if (!matchToFilter) {
            matchToFilter = new Map();
        }
        if (checked) {
            let selectedCategory = "";
            let allChecked = true;
            /*Zaznaczanie - weryfikacja czy należy usunąć nadkategorię*/
            if (matchToData && matchToData.category) {
                matchToData.category.forEach(function(filter) {
                    filter.children.forEach(function(model) {
                        if (model.id === selectedModel) {
                            selectedCategory = filter.id;
                            delete matchToFilter[filter.id];
                        }
                    })
                });
                matchToData.category.forEach(function(filter) {
                    if (selectedCategory === filter.id) {
                        filter.children.forEach(function(model) {
                            if (model.id && model.id != '' && !$('[data-id=' + model.id + '] :input').prop('checked') === true) {
                                allChecked = false;
                            }
                        });
                    }
                });
                if (allChecked) {
                    matchToData.category.forEach(function(filter) {
                        if (selectedCategory === filter.id) {
                            filter.children.forEach(function(model) {
                                delete matchToFilter[model.id];
                            });
                        }
                    });
                }
            }
            if (allChecked) {
                if (selectedCategory != "") {
                    matchToFilter[selectedCategory] = 1;
                    $('[data-id=' + selectedCategory + '] :input').prop('checked', true);
                } else {
                    matchToFilter[selectedModel] = 1;
                }
            } else {
                matchToFilter[selectedModel] = 1;
            }
        } else {
            let oneIsChecked = false;
            let categoryId = "";
            /*Odznaczanie jednego checkboxa - usuwanie głównej kategorii i zamiana na podkategorię*/
            if (matchToData && matchToData.category) {
                matchToData.category.forEach(function(filter) {
                    filter.children.forEach(function(model) {
                        if (model.id === selectedModel) {
                            categoryId = filter.id;
                            delete matchToFilter[filter.id];
                        }
                        if (model.id && model.id != '' && $('[data-id=' + model.id + '] :input').prop('checked') === true) {
                            matchToFilter[model.id] = 1;
                            oneIsChecked = true;
                        }
                    })
                });
            }
            if (!oneIsChecked && categoryId != "") {
                matchToFilter[categoryId] = "1";
            }
            delete matchToFilter[selectedModel];
        }
        return matchToFilter;
    },

    deleteFilterByCode: (key, actualFilters) => {
        delete actualFilters[key];
        return actualFilters;
    },

    deleteNumberFilterByCode: (key, actualNumberFilters) => {
        actualNumberFilters[key] = "";
        return actualNumberFilters;
    },

    deleteMatchToFilterByCode: (key, matchToFilter) => {
        delete matchToFilter[key];
        $('[data-id=' + key + '] :input').prop("checked", false);
        return matchToFilter;
    },
    getMapFilters: (actualFilters) => {
        var filterMap;
        if (actualFilters) {
            filterMap = createMapFromObject(actualFilters);
        } else {
            filterMap = new Map();
        }
        return filterMap;
    },
    getFilterNameDescription: (key, filters) => {
        var name = ""
        filters.forEach(function(filter) {
            if (filter.code === key) {
                name = filter.name;
            }
        })
        return name;
    },
    getMatchToDescription: (key, matchToData) => {
        var name = ""
        matchToData.category.forEach(function(filter) {
            if (filter.id === key) {
                name = filter.title;
            }
            filter.children.forEach(function(model) {
                if (model.id === key) {
                    name = model.title;
                }
            })
        })
        return name;

    },
    getNumberFilterNameDescription: (key, filters) => {
        let _type = "";
        if (key.indexOf("_to") > 0) {
            _type = " do";
        } else {
            _type = " od";
        }
        key = key.replace("_to", "");
        key = key.replace("_from", "");
        var name = ""
        filters.forEach(function(filter) {
            if (filter.code === key) {
                name = filter.name + _type;
            }
        })
        return name;
    },
    manageStickerFilter: (actualStickerFilters, element, parent, multiValue, operation, stickerFilters) => {
        var stickerCode = parent.code;
        if (!multiValue) {
            actualStickerFilters[stickerCode] = element;
        } else {
            manageMultiValue(actualStickerFilters, element, stickerCode);
            // check empty multi value. Required in case of HTTP 500 error for request with empty values
            if (actualStickerFilters[stickerCode] == "") {
                delete actualStickerFilters[stickerCode]
            }
        }

        Object.keys(stickerFilters).forEach((key, index) => {
            let toRemoveSticker = true;
            stickerFilters.forEach((element) => {
                if (element.code == key) {
                    toRemoveSticker = false;
                }
            });
            if (actualStickerFilters == true) {
                delete actualStickerFilters[key];
            }
        });
        return actualStickerFilters;
    },
    getStickerFilters: (allFilters, newValues) => {
        var newFilters = {};
        var newValuesSplit = newValues.split(',');

        newValuesSplit.forEach((newValue) => {
            if (allFilters) {
                allFilters.forEach((element) => {
                    if (newValue == element.code) {
                        newFilters[newValue] = element.name;
                    }
                });
            }

            if (!newFilters[newValue]) {
                newFilters[newValue] = '';
            }
        });

        return newFilters;
    },
    clearActualNumberFilterAfterCategoryChange: (categoryFilter, actualNumberFilters) => {
        if (actualNumberFilters) {
            Object.keys(actualNumberFilters).forEach(entry => {
                let filtered = categoryFilter.filter(element => entry.startsWith((element.code)));
                if (filtered && filtered.length === 0) {
                    delete actualNumberFilters[entry];
                }
            });
        }
        console.log(actualNumberFilters);
        return actualNumberFilters;
    },
    clearActualFilterAfterCategoryChange: (categoryFilter, actualFilters) => {
        if (actualFilters) {
            Object.keys(actualFilters).forEach((key, index) => {
                let filtered = categoryFilter.filter(element => key === element.code);
                if (filtered && filtered.length === 0) {
                    delete actualFilters[key];
                }
            });
        }
        return actualFilters;
    }
}