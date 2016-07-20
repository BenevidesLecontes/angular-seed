/**
 * Created by benevideschissanga on 19/07/16.
 */
import {BaseComponent} from '../../frameworks/core/index';
import {Inject} from "@angular/core";

import {CoreConfigService} from "../../frameworks/core/services/core-config.service";
import {PAGE} from "../../frameworks/core/tokens/opakeToken";
@BaseComponent({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    constructor(@Inject(PAGE) private page:any) {
        console.log(CoreConfigService.IS_MOBILE_NATIVE());
        if (CoreConfigService.IS_MOBILE_NATIVE()) {
            this.page.actionBarHidden = true;
            this.page.backgroundImage = "res://bg_login";
        }
    }
}