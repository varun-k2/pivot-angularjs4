﻿import { Component, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "fm-pivot",
    template: "<div></div>"
})
export class FlexmonsterPivot {
    // params
    @Input() toolbar: boolean;
    @Input() licenseKey: string;
    @Input() width: string | number;
    @Input() height: string | number;
    @Input() componentFolder: string;
    @Input() report: Flexmonster.Report | string;
    @Input() global: Flexmonster.Report;
    // events
    @Output() cellclick: EventEmitter<Flexmonster.Cell> = new EventEmitter();
    @Output() celldoubleclick: EventEmitter<Flexmonster.Cell> = new EventEmitter();
    @Output() dataerror: EventEmitter<Object> = new EventEmitter();
    @Output() datafilecancelled: EventEmitter<Object> = new EventEmitter();
    @Output() dataloaded: EventEmitter<Object> = new EventEmitter();
    @Output() datachanged: EventEmitter<Object> = new EventEmitter();
    @Output() fieldslistclose: EventEmitter<Object> = new EventEmitter();
    @Output() fieldslistopen: EventEmitter<Object> = new EventEmitter();
    @Output() filteropen: EventEmitter<Object> = new EventEmitter();
    @Output() fullscreen: EventEmitter<Object> = new EventEmitter();
    @Output() loadingdata: EventEmitter<Object> = new EventEmitter();
    @Output() loadinglocalization: EventEmitter<Object> = new EventEmitter();
    @Output() loadingolapstructure: EventEmitter<Object> = new EventEmitter();
    @Output() loadingreportfile: EventEmitter<Object> = new EventEmitter();
    @Output() localizationerror: EventEmitter<Object> = new EventEmitter();
    @Output() localizationloaded: EventEmitter<Object> = new EventEmitter();
    @Output() olapstructureerror: EventEmitter<Object> = new EventEmitter();
    @Output() olapstructureloaded: EventEmitter<Object> = new EventEmitter();
    @Output() openingreportfile: EventEmitter<Object> = new EventEmitter();
    @Output() querycomplete: EventEmitter<Object> = new EventEmitter();
    @Output() queryerror: EventEmitter<Object> = new EventEmitter();
    @Output() ready: EventEmitter<Flexmonster.Pivot> = new EventEmitter();
    @Output() reportchange: EventEmitter<Object> = new EventEmitter();
    @Output() reportcomplete: EventEmitter<Object> = new EventEmitter();
    @Output() reportfilecancelled: EventEmitter<Object> = new EventEmitter();
    @Output() reportfileerror: EventEmitter<Object> = new EventEmitter();
    @Output() reportfileloaded: EventEmitter<Object> = new EventEmitter();
    @Output() runningquery: EventEmitter<Object> = new EventEmitter();
    @Output() update: EventEmitter<Object> = new EventEmitter();
    // api
    public flexmonster: Flexmonster.Pivot;
    // private
    private root: HTMLElement;

    constructor(el: ElementRef) {
        this.root = <HTMLElement>el.nativeElement;
    }

    ngOnInit() {
        this.flexmonster = window["Flexmonster"]({
            container: this.root.getElementsByTagName("div")[0],
            componentFolder: this.componentFolder,
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            licenseKey: this.licenseKey,
            report: this.report,
            global: this.global,
            cellclick: (cell: Flexmonster.Cell) => this.cellclick.next(cell),
            celldoubleclick: (cell: Flexmonster.Cell) => this.celldoubleclick.next(cell),
            dataerror: (event: Object) => this.dataerror.next(event),
            datafilecancelled: (event: Object) => this.datafilecancelled.next(event),
            dataloaded: (event: Object) => this.dataloaded.next(event),
            datachanged: (event: Object) => this.datachanged.next(event),
            fieldslistclose: (event: Object) => this.fieldslistclose.next(event),
            fieldslistopen: (event: Object) => this.fieldslistopen.next(event),
            filteropen: (event: Object) => this.filteropen.next(event),
            fullscreen: (event: Object) => this.fullscreen.next(event),
            loadingdata: (event: Object) => this.loadingdata.next(event),
            loadinglocalization: (event: Object) => this.loadinglocalization.next(event),
            loadingolapstructure: (event: Object) => this.loadingolapstructure.next(event),
            loadingreportfile: (event: Object) => this.loadingreportfile.next(event),
            localizationerror: (event: Object) => this.localizationerror.next(event),
            localizationloaded: (event: Object) => this.localizationloaded.next(event),
            olapstructureerror: (event: Object) => this.olapstructureerror.next(event),
            olapstructureloaded: (event: Object) => this.olapstructureloaded.next(event),
            openingreportfile: (event: Object) => this.openingreportfile.next(event),
            querycomplete: (event: Object) => this.querycomplete.next(event),
            queryerror: (event: Object) => this.queryerror.next(event),
            ready: () => this.ready.next(this.flexmonster),
            reportchange: (event: Object) => this.reportchange.next(event),
            reportcomplete: (event: Object) => this.reportcomplete.next(event),
            reportfilecancelled: (event: Object) => this.reportfilecancelled.next(event),
            reportfileerror: (event: Object) => this.reportfileerror.next(event),
            reportfileloaded: (event: Object) => this.reportfileloaded.next(event),
            runningquery: (event: Object) => this.runningquery.next(event),
            update: (event: Object) => this.update.next(event)
        });
    }
}