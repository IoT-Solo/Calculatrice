
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposPageRoutingModule } from './propos-routing.module';
import { SignatureComponent } from '../signature/signature.component';
import { ProposPage } from './propos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposPageRoutingModule
  ],
  declarations: [ProposPage, SignatureComponent]
})
export class ProposPageModule {}
