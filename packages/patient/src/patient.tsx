import React from "react";
import { observer } from "mobx-react";

@observer
export class Patient extends React.Component<{}> {
    render() {
        return (
            <div>
                A patient
            </div>
        );
    }
}