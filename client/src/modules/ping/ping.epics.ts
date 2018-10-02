import { AnyAction } from 'redux';
import { combineEpics, ActionsObservable, Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { PING, PING_FAILURE, PING_SUCCESS } from './ping.constants';
import { dispatchError } from '../utils/errors';
import { toastr } from 'react-redux-toastr';

import { Store } from '../../store.d';

// pring
const fetchPingEpic: Epic<AnyAction, Store> = (action$: ActionsObservable<any>) =>
    action$.ofType(PING)
        .mergeMap(() => {
            return ajax.get(`${baseUrl}ping`)
                .mergeMap(({ response }: AjaxResponse) => {
                    toastr.success(`Ping successfully`, response.message);
                    return Observable.of({
                        type: PING_SUCCESS,
                        message: response.message,
                    })
                    .delay(1000); // to see the loader
                }).catch((ajaxResponse) => {
                    return dispatchError(ajaxResponse, PING_FAILURE, 'Unable to ping');
                });
        });

const pingEpic = combineEpics(
    fetchPingEpic,
);

export default pingEpic;
