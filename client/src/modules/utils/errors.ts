import { Observable } from 'rxjs';
import { toastr } from 'react-redux-toastr';

const handleMessage = (xhr: any) => {
    xhr = xhr || { statusText: 'Unknown error' };
    return xhr.response && xhr.response.message || xhr.response || { message: xhr.statusText };
};

export const dispatchError = (response: any, typeErr: string, toastMsg: string) => {
    response = response || { xhr: {} };
    const payload = handleMessage(response.xhr);
    toastr.error(toastMsg, payload);
    const result: Observable<any> = Observable.of({
        type: typeErr,
        payload,
    });
    // if (response.xhr.status === 401) {
    //     result = Observable.concat(
    //         result,
    //         Observable.of({ type: LOGOUT }),
    //     );
    // }
    return result;
};
