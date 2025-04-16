import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'page-main-page',
    imports: [NgOptimizedImage, RouterModule],
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
export class MainPageComponent {
    private router = inject(Router);
}
