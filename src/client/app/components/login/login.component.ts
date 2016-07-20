/**
 * Created by benevideschissanga on 19/07/16.
 */
import {BaseComponent} from '../../frameworks/core/index';
import {Inject} from "@angular/core";
import {PAGE} from "../../frameworks/core/tokens/opakeToken";
import {CoreConfigService} from "../../frameworks/core/services/core-config.service";
@BaseComponent({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    constructor(@Inject (PAGE) private page:any) {
        if (CoreConfigService.IS_MOBILE_NATIVE) {
            this.page.actionBarHidden = true;
            this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
        }
    }
}