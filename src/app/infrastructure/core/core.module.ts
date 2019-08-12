import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; // Handle Http headers

//import { DataFilterService } from './data-filter/data-filter.service';
import { Sorter } from './sorter/sorter';
import { TrackByService } from './tracker/trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/OnceGuard/ensureModuleLoadedOnceGuard';

import { HttpCacheService } from './cache/http-cache.service';
import { AddHeaderInterceptor } from './interceptor/add-header.interceptor';
import { CacheHttpRequestInterceptor } from './interceptor/cache-http-request.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        // DataFilterService,
        Sorter,
        TrackByService,
        HttpCacheService,
        { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true }, // Handle Http headers
        { provide: HTTP_INTERCEPTORS, useClass: CacheHttpRequestInterceptor, multi: true }, // Handle Http headers 
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}
