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
    public arduino: any;
    public status: any;

    private ngUnsubscribe = new Subject();

    constructor(
        private appService: AppService
    ) {}

    ngOnInit() {
        this.getDados();
        this.getStatus();
    }

    private getDados() {
        this.appService.getLogs().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => {
            this.arduino = val.at(-1);
            console.log(this.arduino);
        });
    }

    private getStatus() {
        this.appService.getStatus().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => { this.status = val.at(-1); });
    }
}
