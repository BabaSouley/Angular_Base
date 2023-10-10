import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadJsonComponent } from './read-json.component';
import { ReadJsonRoutingModule } from './read-json-routing.module';
import { ReadJsonService } from './read-json.service';


@NgModule({
  declarations: [
    ReadJsonComponent
  ],
  imports: [
    CommonModule,
    ReadJsonRoutingModule
  ],
  exports:[
    ReadJsonComponent
  ],
  providers: [ReadJsonService
  ],
})
export class ReadJsonModule { }
