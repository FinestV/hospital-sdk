import React from "react";
import PenSVG from "./pen.svg";

export const Pen = PenSVG;

export class Doctor extends React.Component<{}> {
    render() {
        return (
            <div>
                Doctor
                <PenSVG />
            </div>
        );
    }
}

export class DecoratedDoctor extends React.Component {
    render() {
        return (
            <div>
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
                {anotherOne.toString()}
            </div>
        );
    }
}