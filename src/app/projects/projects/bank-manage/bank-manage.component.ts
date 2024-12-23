import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
    selector: 'app-bank-manage',
    templateUrl: './bank-manage.component.html',
    styleUrl: './bank-manage.component.scss',
    standalone: false
})
export class BankManageComponent implements Project {
  id = 'bank-manage';
  name = 'Gestion de banque';
  description = 'Gestion de compte bancaire';
  type = ProjectType.IUT;
}
