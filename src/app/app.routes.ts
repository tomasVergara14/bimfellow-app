import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'main',
        loadComponent: () =>
            import('./pages/main-page/main-page.component').then((m) => m.MainPageComponent),
        data: { animation: 'Page' }, // 👈 Helps Angular clean up old views properly
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./pages/about-us-page/about-us-page.component').then(
                (m) => m.AboutUsPageComponent,
            ),
        data: { animation: 'Page' },
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects-page/projects.component').then((m) => m.ProjectsComponent),
        data: { animation: 'Page' },
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact-page/contact-page.component').then(
                (m) => m.ContactPageComponent,
            ),
        data: { animation: 'Page' },
    },
    {
        path: '**',
        redirectTo: 'main',
    },
];
