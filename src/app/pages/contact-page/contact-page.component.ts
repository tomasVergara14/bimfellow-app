import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { EmailJsService } from '../../services/email-js.service';
import { SweetalertService } from '../../services/sweetalert.service';

@Component({
    selector: 'page-contact-page',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
    host: {
        '[attr.pageTransition]': 'true',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
    private fb = inject(FormBuilder);
    private emailJsService = inject(EmailJsService);
    private sweetAlertService = inject(SweetalertService);

    public contactForm: FormGroup = this.fb.group({
        from_name: new FormControl('', Validators.required),
        from_email: new FormControl('', [Validators.required, Validators.email]),
        to_name: new FormControl(''),
        to_email: new FormControl(''),
        message: new FormControl('', Validators.required),
    });

    submitForm() {
        console.log(this.contactForm.value);
        //To us
        this.emailJsService.sendEmailToUs(
            'Bimfellow',
            this.contactForm.value.from_name,
            this.contactForm.value.from_email,
            'Contact',
            this.contactForm.value.message,
        );
        // To user
        this.emailJsService.sendEmailToUser(
            this.contactForm.value.from_name,
            this.contactForm.value.from_email,
        );

        this.sweetAlertService.triggerAlert();

        this.contactForm.reset();
    }
}
