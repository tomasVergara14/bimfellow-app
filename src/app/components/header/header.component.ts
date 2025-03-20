import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [DropdownComponent, CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private router = inject(Router);

    public isMenuOpen: boolean = false;
    public menuOptions: { label: string; link: string; icon: string }[] = [
        { label: 'About Us', link: '/about-us', icon: '<i class="fa-solid fa-circle-info"></i>' },
        { label: 'Projects', link: '/projects', icon: '<i class="fa-solid fa-pen-ruler"></i>' },
        { label: 'Contact', link: '/contact', icon: '<i class="fa-solid fa-inbox"></i>' },
    ];

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    redirectToHome() {
        console.log('redirecting to home');
        this.router.navigate(['/main']);
    }
}
