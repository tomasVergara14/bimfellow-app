import { Injectable } from '@angular/core';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
    providedIn: 'root',
})
export class EmailJsService {
    constructor() {}

    sendEmailToUs() {
        emailjs.send('bim_fellow_id', 'template_8h8jhox', {
            to_name: 'tom', // bimfellow name
            from_message: 'Celi', // users name
            from_email: 'celinasa@gmail.com', // users email
            subject: 'Testeando a ver',
            message: 'Probando 1 Probando 2',
            email: 'tomasvergara272@gmail.com', // bimfellow email
        });
    }

    // To us:

    // To the user:
    // emailjs.send("bim_fellow_id","template_z7lr2e3",{
    //   name: "username",                        // users name
    //   email: "tomasvergara272@gmail.com",      // users email
    //   });
}
