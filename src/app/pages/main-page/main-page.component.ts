import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'page-main-page',
    imports: [NgOptimizedImage],
    providers: [
        {
            provide: IMAGE_CONFIG,
            useValue: {
                breakpoints: [16, 48, 96, 128, 384, 640, 750, 828, 1080, 1200, 1920],
            },
        },
    ],
    host: {
        '[attr.pageTransition]': 'true',
    },
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
