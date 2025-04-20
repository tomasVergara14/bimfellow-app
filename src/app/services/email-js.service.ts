import { inject, Injectable } from '@angular/core';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EmailJsService {
    constructor() {}

    private config = environment;

    async sendEmailToUs(
        to_name: string,
        from_name: string,
        from_email: string,
        subject: string,
        message: string,
    ) {
        emailjs.init(this.config.PUBLIC_KEY);
        let response = await emailjs.send(
            this.config.SERVICE_ID,
            this.config.NOTIFICATION_TEMPLATE_ID,
            {
                to_name, // bimfellow name
                from_name, // users name
                from_email, // users email
                subject,
                message,
                email: this.config.MAIL_BIMFELLOW, // bimfellow email
            },
        );
    }

    async sendEmailToUser(usersName: string, userseMail: string) {
        emailjs.init(this.config.PUBLIC_KEY);

        let response = emailjs.send(this.config.SERVICE_ID, this.config.RESPONSE_TEMPLATE_ID, {
            name: usersName,
            email: userseMail,
        });
    }
}
