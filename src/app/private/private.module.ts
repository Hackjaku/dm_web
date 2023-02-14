import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { MasterComponent } from './master/master.component';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    PrivateComponent,
    MasterComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
