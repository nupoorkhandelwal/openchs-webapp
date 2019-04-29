import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Admin, Resource, ListGuesser } from "react-admin";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { authProvider, LogoutButton } from "../admin";
import { store, adminHistory } from "../store";
import { UserList, UserDetail, UserCreate, UserEdit } from './user';
import { CatchmentDetail } from "./catchment";
import {LocationList} from "./location";

class OrgManager extends Component {
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return { store }
    }

    render() {
        const k = [
            {name:'Village', level: 1},
            {name:'Block', level: 2},
            {name:'District', level: 3},
        ];
        const _UserList = props => <UserList {...props} organisation={this.props.organisation} />;
        const _LocationList = props => <LocationList {...props} locationTypes={k} />;
        return (
            <Admin title="Manage Organisation"
                   authProvider={authProvider}
                   history={adminHistory}
                   logoutButton={LogoutButton}>
                <Resource name="user" list={_UserList} show={UserDetail} create={UserCreate} edit={UserEdit} />
                <Resource name="catchment" show={CatchmentDetail} />
                {/*list={_LocationList} show={LocationDetail} create={LocationCreate} edit={LocationEdit} */}
                <Resource  name="locations" list={_LocationList}/>
            </Admin>
        );
    }
}

const mapStateToProps = state => ({
    organisation: state.app.organisation,
    locationTypes: state.app.locationTypes,
});

export default withRouter(
    connect(mapStateToProps, null)(OrgManager)
);
