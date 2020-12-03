import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const config = {
  name: 'mercadito',
  connector: 'mssql',
  url: 'mssql://jackseni:jackseni@DESKTOP-2NLKVJO/Mercado',
  host: 'DESKTOP-2NLKVJO',
  port: 1433,
  user: 'jackseni',
  password: 'jackseni',
  database: 'mercado'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MercadoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mercadito';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mercado', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

