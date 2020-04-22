import {
    combineReducers
} from 'redux';
import items from './items';
import itemsUnfiltered from './itemsUnfiltered';
import links from './links';
import * as metadata from './metadata';

export default combineReducers({
    items: items,
    itemsUnfiltered: itemsUnfiltered,
    links: links,
    metadata: combineReducers(metadata)
})