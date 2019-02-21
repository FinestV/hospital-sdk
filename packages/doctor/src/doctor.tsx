import React from "react";
import { observer } from "mobx-react";

export class Doctor extends React.Component<{}> {
    render() {
        return (
            <div>
                Doctor
            </div>
        );
    }
}

@observer
export class DecoratedDoctor extends React.Component<{}> {
    render() {
        return (
            <div>
                Decorate Doc
            </div>
        );
    }
}

@observer
export class AnotherDecoratedDoctor extends React.Component<{}> {
    render() {
        const anotherOne = Object.assign({}, {});
        return (
            <div>
                {anotherOne.toString()}
            </div>
        );
    }
}