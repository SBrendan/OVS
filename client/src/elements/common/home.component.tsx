import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Loader } from 'semantic-ui-react';

import { ping as pingFunc } from '../../modules/ping/ping.constants';

import { Store } from '../../store.d';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {
    loading: boolean;
    sendPing: () => void;
}

class HomeComponent extends React.Component<Props, any> {
    public render() {
        const { loading, sendPing } = this.props;
        const onClick = () => sendPing();
        if (loading) {
            return (
                <div className='flex layout vertical center-center'>
                    <Loader active />
                </div>
            );
        }
        return (
            <div className='flex layout vertical center-center'>
                <h1>Home</h1>
                <Button primary content='Ping' onClick={onClick} />
            </div>
        );
    }
}

// Function to map state to props
const mapStateToProps = (state: Store): any => {
    const { ping } = state;

    return {
        loading: ping.fetching,
    };
};

// Function to map dispatch to props
const mapDispatchToProps = (dispatch: Dispatch<Store>): any => {
    return {
        sendPing: () => { dispatch(pingFunc()); },
    };
};

// Redux container
export const Home = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeComponent));
