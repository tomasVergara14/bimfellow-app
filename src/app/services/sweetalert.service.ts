import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class SweetalertService {
    constructor() {}

    triggerAlert() {
        Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for reaching out. The BIM Fellow team will reply as soon as possible.',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    }
}
