// import 'reflect-metadata';
// import 'rxjs/add/operator/map';

// nativescript
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {NS_ROUTER_DIRECTIVES, nsProvideRouter} from 'nativescript-angular/router';

// angular
import {provide, enableProdMode} from '@angular/core';

// libs
import {TranslateLoader} from 'ng2-translate/ng2-translate';
import {TNSTranslateLoader} from 'nativescript-ng2-translate/nativescript-ng2-translate';

// config
import {CoreConfigService, WindowService, HttpService} from './app/frameworks/core/index';
CoreConfigService.PLATFORM_TARGET = CoreConfigService.PLATFORMS.MOBILE_NATIVE;
CoreConfigService.DEBUG.LEVEL_4 = true;
CoreConfigService.ROUTER_DIRECTIVES = NS_ROUTER_DIRECTIVES;

// app
import {NS_APP_PROVIDERS} from './shared/nativescript/index';
import {routes} from './app/components/app/app.routes';
import {NSAppComponent} from './pages/app/app.component';
import {WindowNative, ModalNative, NSHttpService} from './shared/core/index';
import {PAGE} from "./app/frameworks/core/tokens/opakeToken";
import {Page} from "ui/page";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("CardView", () => require("nativescript-cardview").CardView);

// Uncomment when ready to publish to App Stores:
// enableProdMode();

nativeScriptBootstrap(NSAppComponent, [
    provide(WindowService, {useClass: WindowNative}),
    provide(PAGE, {useClass: Page}),
    ModalNative,
    provide(HttpService, {useClass: NSHttpService}),
    provide(TranslateLoader, {
        useFactory: () => {
            return new TNSTranslateLoader('assets/i18n');
        }
    }),
    NS_APP_PROVIDERS,
    nsProvideRouter(routes, {enableTracing: false})
]);
