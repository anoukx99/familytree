import { EventEmitter, OnInit } from '@angular/core';
import { Family } from '../models/family.model';
import * as ɵngcc0 from '@angular/core';
export declare class NgFamilyTreeComponent implements OnInit {
    family: Family;
    onLeafSelected: EventEmitter<Family>;
    constructor();
    ngOnInit(): void;
    _leafSelected(_leaf: any): void;
    _setWidth(child: Family): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgFamilyTreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgFamilyTreeComponent, "ft-tree", never, { "family": "family"; }, { "onLeafSelected": "onLeafSelected"; }, never, never, false, never>;
}

//# sourceMappingURL=ng-family-tree.component.d.ts.map