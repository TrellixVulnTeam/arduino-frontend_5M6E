import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'arduino-frontend';
    
    private ngUnsubscribe = new Subject();

    constructor(
        private appService: AppService
    ) {}

    ngOnInit() {
        this.getDados();
    }

    private getDados() {
        this.appService.getLogs().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => { console.log(val) });
    }

    private getStatus() {
        this.appService.getStatus().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => { console.log(val) });
    }
}
