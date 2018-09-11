import { Injectable } from '@angular/core';

import { DataSourceService } from './data-source.service';

@Injectable()

export class RepositoryService {

  constructor(private datasource: DataSourceService) { }

  getInfo(){
    this.datasource.getInfo().subscribe((info)=>{
      console.log(info);
      return info;      
    });
  }
}
