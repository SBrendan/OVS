import { RouterState } from 'react-router-redux';
import { Ping } from './modules/ping/ping.constants';

export interface Store {
  routing: RouterState;
  toastr: any;
  ping: Ping;
}
