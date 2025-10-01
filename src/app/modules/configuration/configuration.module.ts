import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SucursalesModule } from './sucursales/sucursales.module';

import { WarehousesModule } from './warehouses/warehouses.module';

//import { SucursalDeliveriesModule } from './sucursal-deliveries/sucursal-deliveries.module';
//import { MethodPaymentModule } from './method-payment/method-payment.module';
//import { ClientSegmentModule } from './client-segment/client-segment.module';


@NgModule({
  declarations: [
  ],



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ConfigurationRoutingModule,


    SucursalesModule,
    WarehousesModule,
    

    SucursalesModule

  ]
})
export class ConfigurationModule { }
