import { ChangeDetectionStrategy, Component, output, input, OnInit, computed } from '@angular/core';

interface ModalInfo {
    name: string;
    description: string;
    image: string;
}

@Component({
    selector: 'project-modal',
    imports: [],
    templateUrl: './project-modal.component.html',
    styleUrl: './project-modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent implements OnInit {
    public onClose = output<boolean>();
    public projectData = input.required<ModalInfo>();

    // ✅ Usamos `computed()` para acceder al input en un contexto reactivo
    public modalInfo = computed<ModalInfo>(() => this.projectData());

    constructor() {}

    ngOnInit(): void {
        console.log(this.projectData());
        console.log(this.modalInfo());
    }

    closeModal() {
        console.log('Close modal');
        this.onClose.emit(true);
    }
}
