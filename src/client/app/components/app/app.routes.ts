import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';
import {LoginRoutes} from "../login/loginRoutes";

export const routes:RouterConfig = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
