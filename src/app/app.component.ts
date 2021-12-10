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
    public currentCoast: {
        coast: number,
        seconds: number,
        potency: number
    } = {
        coast: 0,
        seconds: 0,
        potency: 0
    };

    private ngUnsubscribe = new Subject();

    constructor(
        private appService: AppService
    ) {}

    ngOnInit() {
        this.getDados();
        this.getStatus();
        this.getCoast();
    }

    private getDados() {
        this.appService.getLogs().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => {
            this.arduino = val.at(-1);
        });
    }

    private getStatus() {
        this.appService.getStatus().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => { this.status = val.at(-1); });
    }

    private getCoast() {
        this.appService.getCoast().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => { this.currentCoast = val; });
    }
}
