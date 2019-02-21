var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
var Doctor = (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.render = function () {
        return (React.createElement("div", null, "Doctor"));
    };
    return Doctor;
}(React.Component));
export { Doctor };
var DecoratedDoctor = (function (_super) {
    __extends(DecoratedDoctor, _super);
    function DecoratedDoctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoratedDoctor.prototype.render = function () {
        return (React.createElement("div", null, "Something new"));
    };
    DecoratedDoctor = __decorate([
        observer
    ], DecoratedDoctor);
    return DecoratedDoctor;
}(React.Component));
export { DecoratedDoctor };
var AnotherDecoratedDoctor = (function (_super) {
    __extends(AnotherDecoratedDoctor, _super);
    function AnotherDecoratedDoctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnotherDecoratedDoctor.prototype.render = function () {
        var anotherOne = Object.assign({}, {});
        return (React.createElement("div", null, anotherOne.toString()));
    };
    AnotherDecoratedDoctor = __decorate([
        observer
    ], AnotherDecoratedDoctor);
    return AnotherDecoratedDoctor;
}(React.Component));
export { AnotherDecoratedDoctor };
//# sourceMappingURL=doctor.js.map