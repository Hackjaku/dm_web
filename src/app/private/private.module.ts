import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { SpellsComponent } from './spells/spells.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    ItemsComponent,
    SpellsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
