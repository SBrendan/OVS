import { combineReducers, AnyAction } from 'redux';
import { Ping, PING, PING_FAILURE, PING_SUCCESS } from './ping.constants';

const fetching = (state = false, action: AnyAction) => {
    switch (action.type) {
        case PING:
            return true;
        case PING_FAILURE:
        case PING_SUCCESS:
            return false;
        default:
            return state;
    }
};

const ping = combineReducers<Ping>({
    fetching,
});

export default ping;
