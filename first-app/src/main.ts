import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* 
import * as calcObj from './calc';
//calcObj -> module object with all the entities exported
console.log(calcObj); 
*/

/* 
import * as calcObj from './calc';
//calcObj.add()
//const add = calcObj.add;
const { add } = calcObj;
console.log(add(100,200)); 
*/

/* 
import { add } from './calc';
console.log(add(100,200)); 
*/

//importing a 'default' exported object
import calcObj from './calc';
console.log(calcObj.add(200,300));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
