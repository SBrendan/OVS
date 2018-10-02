export const PING = 'PING';
export const PING_SUCCESS = 'PING_SUCCESS';
export const PING_FAILURE = 'PING_FAILURE';

export interface Ping {
    fetching: boolean;
}

export const ping = () => ({
    type: PING,
});
