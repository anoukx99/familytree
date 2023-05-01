import { Component, EventEmitter, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgFamilyTreeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵlistener("click", function NgFamilyTreeComponent_span_4_Template_span_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const node_r2 = restoredCtx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r3._leafSelected(node_r2)); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    ɵngcc0.ɵɵclassMap(node_r2.gender);
    ɵngcc0.ɵɵproperty("ngClass", node_r2.relationship ? node_r2.relationship + "-leaf" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(node_r2.name);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function NgFamilyTreeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5)(1, "ft-leaf", 6);
    ɵngcc0.ɵɵlistener("onLeafSelected", function NgFamilyTreeComponent_li_6_Template_ft_leaf_onLeafSelected_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r6._leafSelected($event)); });
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r1._setWidth(child_r5) ? "100%" : "auto"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("child", child_r5);
} }
function FtLeafComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 2);
    ɵngcc0.ɵɵlistener("click", function FtLeafComponent_span_1_Template_span_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const node_r2 = restoredCtx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r3._leafSelected(node_r2)); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    ɵngcc0.ɵɵclassMap(node_r2.gender);
    ɵngcc0.ɵɵproperty("ngClass", node_r2.relationship ? node_r2.relationship + "-leaf" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(node_r2.name);
} }
function FtLeafComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4)(1, "ft-leaf", 5);
    ɵngcc0.ɵɵlistener("onLeafSelected", function FtLeafComponent_ul_2_li_1_Template_ft_leaf_onLeafSelected_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ɵngcc0.ɵɵresetView(ctx_r7._leafSelected($event)); });
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r5.child.children.length === 1 ? "100%" : "auto"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("child", row_r6);
} }
function FtLeafComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, FtLeafComponent_ul_2_li_1_Template, 2, 4, "li", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.child.children);
} }
class Family {
    constructor() {
        this.children = [];
        this.nodes = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFamilyTreeComponent {
    constructor() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} _leaf
     * @return {?}
     */
    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }
    /**
     * @param {?} child
     * @return {?}
     */
    _setWidth(child) {
        return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
    }
}
NgFamilyTreeComponent.ɵfac = function NgFamilyTreeComponent_Factory(t) { return new (t || NgFamilyTreeComponent)(); };
NgFamilyTreeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgFamilyTreeComponent, selectors: [["ft-tree"]], inputs: { family: "family" }, outputs: { onLeafSelected: "onLeafSelected" }, decls: 7, vars: 2, consts: [[1, "tree"], [1, "top"], ["class", "node", 3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "node", 3, "ngClass", "click"], [3, "ngStyle"], [3, "child", "onLeafSelected"]], template: function NgFamilyTreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "ul")(2, "li")(3, "div", 1);
        ɵngcc0.ɵɵtemplate(4, NgFamilyTreeComponent_span_4_Template, 2, 5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "ul");
        ɵngcc0.ɵɵtemplate(6, NgFamilyTreeComponent_li_6_Template, 2, 4, "li", 3);
        ɵngcc0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.family.nodes);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.family.children);
    } }, dependencies: function () { return [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgStyle, FtLeafComponent]; }, styles: ["*{margin:0;padding:0;font-size:10pt}.tree{white-space:nowrap;min-width:800px;min-height:500px}.tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree ul ul::before{content:\"\";position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li::before{content:\"\";position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.tree li::after{content:\"\";position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.tree li:only-child{padding-top:0}.tree li:only-child::after,.tree li:only-child::before{display:none}.tree li:first-child::before{border:0}.tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.tree li:last-child::after{border:0}.tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.tree li div{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-size:11px;display:inline-block;min-width:80px;min-height:30px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li div .node{display:inline-block;min-width:90px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;margin:0 2px}.tree li div .node.male{background-color:#add8e6}.tree li div .node.female{background-color:#ffb6c1}.tree li div:hover,.tree li div:hover+ul li div{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.tree li div:hover+ul li::after,.tree li div:hover+ul li::before,.tree li div:hover+ul ul::before,.tree li div:hover+ul::before{border-color:#94a0b4}"], encapsulation: 2 });
/** @nocollapse */
NgFamilyTreeComponent.ctorParameters = () => [];
NgFamilyTreeComponent.propDecorators = {
    family: [{ type: Input }],
    onLeafSelected: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgFamilyTreeComponent, [{
        type: Component,
        args: [{ selector: 'ft-tree', template: `
    <div class="tree">
      <ul>
        <li>
          <div class="top">
            <span  *ngFor="let node of family.nodes" (click)="_leafSelected(node)"
                   class="{{node.gender}}"
                   [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
                   class="node">{{node.name}}</span>
          </div>
          <ul>
            <li *ngFor="let child of family.children" [ngStyle]="{'width': _setWidth(child) ? '100%' : 'auto'}" >
              <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `, encapsulation: ViewEncapsulation.None, styles: ["*{margin:0;padding:0;font-size:10pt}.tree{white-space:nowrap;min-width:800px;min-height:500px}.tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree ul ul::before{content:\"\";position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li::before{content:\"\";position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.tree li::after{content:\"\";position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.tree li:only-child{padding-top:0}.tree li:only-child::after,.tree li:only-child::before{display:none}.tree li:first-child::before{border:0}.tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.tree li:last-child::after{border:0}.tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.tree li div{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-size:11px;display:inline-block;min-width:80px;min-height:30px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li div .node{display:inline-block;min-width:90px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;margin:0 2px}.tree li div .node.male{background-color:#add8e6}.tree li div .node.female{background-color:#ffb6c1}.tree li div:hover,.tree li div:hover+ul li div{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.tree li div:hover+ul li::after,.tree li div:hover+ul li::before,.tree li div:hover+ul ul::before,.tree li div:hover+ul::before{border-color:#94a0b4}"] }]
    }], function () { return []; }, { onLeafSelected: [{
            type: Output
        }], family: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FtLeafComponent {
    constructor() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @param {?} _leaf
     * @return {?}
     */
    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }
}
FtLeafComponent.ɵfac = function FtLeafComponent_Factory(t) { return new (t || FtLeafComponent)(); };
FtLeafComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: FtLeafComponent, selectors: [["ft-leaf"]], inputs: { child: "child" }, outputs: { onLeafSelected: "onLeafSelected" }, decls: 3, vars: 2, consts: [["class", "node", 3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "node", 3, "ngClass", "click"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "child", "onLeafSelected"]], template: function FtLeafComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, FtLeafComponent_span_1_Template, 2, 4, "span", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, FtLeafComponent_ul_2_Template, 2, 1, "ul", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.child.nodes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.child.children && ctx.child.children.length > 0);
    } }, dependencies: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, FtLeafComponent], encapsulation: 2 });
/** @nocollapse */
FtLeafComponent.ctorParameters = () => [];
FtLeafComponent.propDecorators = {
    child: [{ type: Input }],
    onLeafSelected: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FtLeafComponent, [{
        type: Component,
        args: [{
                selector: 'ft-leaf',
                template: `
    <div>
      <span  *ngFor="let node of child.nodes" class="node"
             [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
             (click)="_leafSelected(node)" [class]="node.gender">{{node.name}}</span>
    </div>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children" [ngStyle]="{'width': child.children.length === 1 ? '100%' : 'auto'}">
        <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="row"></ft-leaf>
      </li>
    </ul>
  `
            }]
    }], function () { return []; }, { onLeafSelected: [{
            type: Output
        }], child: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFamilyTreeModule {
}
NgFamilyTreeModule.ɵfac = function NgFamilyTreeModule_Factory(t) { return new (t || NgFamilyTreeModule)(); };
NgFamilyTreeModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgFamilyTreeModule });
NgFamilyTreeModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgFamilyTreeModule, [{
        type: NgModule,
        args: [{
                declarations: [NgFamilyTreeComponent, FtLeafComponent],
                imports: [
                    CommonModule,
                ],
                exports: [NgFamilyTreeComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgFamilyTreeModule, { declarations: function () { return [NgFamilyTreeComponent, FtLeafComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgFamilyTreeComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNode {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgFamilyTreeComponent, NgFamilyTreeModule, Family, TreeNode, FtLeafComponent as ɵa };

//# sourceMappingURL=ng-family-tree.js.map