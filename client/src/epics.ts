import { combineEpics } from 'redux-observable';
import pingEpic from './modules/ping/ping.epics';

export const rootEpic = combineEpics(
    pingEpic,
);
