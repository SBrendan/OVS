import * as React from 'react';
import './navbar.component.scss';

interface CheckboxWithLabelProps {
    labelOff: string;
    labelOn: string;
}

interface CheckboxWithLabelState {
    isChecked: boolean;
}

export class CheckboxWithLabel extends React.Component<CheckboxWithLabelProps, CheckboxWithLabelState> {
    constructor(props: CheckboxWithLabelProps) {
        super(props);
        this.state = { isChecked: false };
    }

    public render() {
        const change: any = () => {
            this.setState((current) => ({ isChecked: !current.isChecked }));
        };
        return (
            <label>
                <input
                    type='checkbox'
                    checked={this.state.isChecked}
                    onChange={change}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }
}
