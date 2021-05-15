import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../_service/institutions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  institutions: any;
  columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Razão Social', datafield: 'razaoSocial'}
  ];
 

  constructor(private institutionService: InstitutionService) {}

  ngOnInit(): void {
    this.getInstitutions();
  }
  async getInstitutions() {
    const resp: any = await this.institutionService.getInstitutions();
    this.institutions = new jqx.dataAdapter({
      localData: resp
    }
      );

    
  }
}
