import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { menuOptions } from '../../interfaces/menuoptions.interface';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-dropdown',
    imports: [RouterModule],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
    @Input({ required: true }) public menuOptions: menuOptions[] = [];
}
