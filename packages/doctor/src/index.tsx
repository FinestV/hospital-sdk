import React from "react";
export * from "./pen.svg";
import Foo from "./foo";
import { Bar } from "./bar";

//export const Pen = PenSVG;

export class Doctor extends React.Component<{}> {
    render() {
        return (
            <div>
                Doctor
            </div>
        );
    }
}

export class DecoratedDoctor extends React.Component {
    render() {
        return (
            <div>
                <Foo />
                Something new
            </div>
        );
    }
}

export class AnotherDecoratedDoctor extends React.Component {
    render() {
        const anotherOne = Object.assign({}, {});
        return (
            <div>
                <Bar />
                {anotherOne.toString()}
            </div>
        );
    }
}