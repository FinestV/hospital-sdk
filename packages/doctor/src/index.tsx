import React from "react";
import { now } from "moment";
import PenSVG from "./pen.svg";
import Foo from "./foo";
import { Bar } from "./bar";

export const Pen = PenSVG;

export class Doctor extends React.Component<{}> {
    render() {
        const whatTimeIsIt = now();
        return (
            <div>
                {whatTimeIsIt}
                Doctor
                <Pen />
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