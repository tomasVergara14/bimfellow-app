import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { environment } from '@env/environments';
import { env } from 'process';

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
    // public contactForm = new FormGroup({
    //     name: new FormControl('', Validators.required),
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     message: new FormControl('', Validators.required),
    // });
    private fb = inject(FormBuilder);
    public contactForm: FormGroup = this.fb.group({
        from_name: new FormControl('', Validators.required),
        from_email: new FormControl('', [Validators.required, Validators.email]),
        to_name: new FormControl(''),
        to_email: new FormControl(''),
        message: new FormControl('', Validators.required),
    });

    // emailjs.send("bim_fellow_id","template_rxxew8v",{
    //     name: "Bimfellow",
    //     message: "Testing email service",
    //     title: "Test-1",
    //     email: "postctester2@gmail.com",
    //     });

    submitForm() {
        // console.log(this.contactForm.value);
    }
}
