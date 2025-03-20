import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectModalComponent } from '../../components/project-modal/project-modal.component';

interface ModalInfo {
    name: string;
    description: string;
    image: string;
}

const projects = [
    {
        name: 'Project 1',
        description: 'Description 1',
        image: 'assets/images/project-1.webp',
    },
    {
        name: 'Project 2',
        description: 'Description 2',
        image: 'assets/images/project-2.webp',
    },
    {
        name: 'Project 3',
        description: 'Description 3',
        image: 'assets/images/project-3.webp',
    },
];

@Component({
    selector: 'page-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [ProjectModalComponent],
    host: {
        '[attr.pageTransition]': 'true',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
    public projectsData = projects;
    public isModalOpen: boolean = false;
    public projectSelected: ModalInfo = {
        name: '',
        description: '',
        image: '',
    };

    constructor() {}

    public openModal(project: ModalInfo): void {
        this.projectSelected = project;
        console.log(this.projectSelected);
        queueMicrotask(() => {
            this.isModalOpen = true;
        });
    }
    public closeModal(): void {
        this.isModalOpen = false;
    }
}
