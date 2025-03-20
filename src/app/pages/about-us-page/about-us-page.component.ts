import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'page-about-us-page',
    imports: [],
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.css',
    host: {
        '[attr.pageTransition]': 'true',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {}
