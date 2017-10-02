import { CreateSwipeHandler, CreateLink } from './containers';
import GalleryReducers from './reducers';
import CardDisplay from './Card';
import Pip from './Pips/Pip';
import PipGroup from './Pips/PipGroup';

const SwipeHandler = CreateSwipeHandler();
const Link = CreateLink();

export {
    SwipeHandler,
    CreateSwipeHandler,
    Link,
    CreateLink,
    GalleryReducers,
    CardDisplay,
    Pip,
    PipGroup,
};

export default {
    SwipeHandler,
    CreateSwipeHandler,
    Link,
    CreateLink,
    GalleryReducers,
    CardDisplay,
    Pip,
    PipGroup,
};
