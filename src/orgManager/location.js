import {
    AutocompleteInput,
    Datagrid,
    Filter,
    FunctionField,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput,
} from "react-admin";
import React from "react";
import _ from 'lodash';

const EntityFilter = ({locationTypes, ...props}) => {
    return (<Filter {...props}>
        <ReferenceInput label='District'
                        source="lineage.DistrictId"
                        reference="locations"
                        alwaysOn
                        sort={{field: 'title', order: 'ASC'}}
                        filter={{type: 'District'}}>
            <AutocompleteInput optionText="title" resettable/>
        </ReferenceInput>
        <ReferenceInput label='Block'
                        source="lineage.BlockId"
                        reference="locations"
                        alwaysOn
                        sort={{field: 'title', order: 'ASC'}}
                        filter={(props.filterValues.lineage)? {type:'Block', parentLocationId: props.filterValues.lineage.DistrictId}: {type: 'Block'}}>
            <AutocompleteInput optionText="title" resettable/>
        </ReferenceInput>
        {/*<ReferenceInput label='Search'*/}
                        {/*source="id"*/}
                        {/*reference='locations'*/}
                        {/*alwaysOn*/}
                        {/*sort={{field: 'title', order: 'ASC'}}*/}
                        {/*filter={{parentLocationId: props.filterValues.parentLocationId}}>*/}
            {/*<AutocompleteInput optionText="title" resettable/>*/}
        {/*</ReferenceInput>*/}

    </Filter>);

    // return (<Filter {...props}>
    //     {_.sortBy(locationTypes, 'level').map((locationType, key) => {
    //         console.log('\'lineage.\' + locationType.name + \'Id\'', 'lineage.' + locationType.name + 'Id');
    //         return (
    //             <ReferenceField key={key}
    //                             label={locationType.name}
    //                             source={'lineage.' + locationType.name + 'Id'} alwaysOn
    //                             reference="locations"
    //                             filter={{type: locationType.name}}>
    //                 <AutocompleteInput optionText={locationType.name}/>
    //             </ReferenceField>
    //         );
    //     })}
    // </Filter>)
};


export const LocationList = ({locationTypes, ...props}) => (
    <List {...props}
        // filter={{type: organisation.id}}
        //Commenting the filters as it does not work properly right now
        /*filters={<UserFilter/>}*/
          filters={<EntityFilter locationTypes={locationTypes}/>}
          title={`Locations`}>
        <Datagrid rowClick="show">
            <TextField label="Id" source="id"/>
            <TextField label="Name" source="title"/>
            {/*<UrlField source="/locations/id=" />*/}
            <TextField label="Level" source="level"/>
            <TextField label="Type" source="typeString"/>
            {/*<ReferenceField label="Parent" source="parentLocationId" reference="locations"*/}
                            {/*linkType="show" allowEmpty>*/}
                {/*<TextField source="title"/>*/}
            {/*</ReferenceField>*/}
            {/*<ReferenceField label="District" source="districtId" reference="locations"*/}
                            {/*linkType="show" allowEmpty>*/}
                {/*<TextField source="title"/>*/}
            {/*</ReferenceField>*/}
            {/*linkType="show" allowEmpty>*/}
            {/*<TextField source="name"/>*/}
            {/*</ReferenceField>*/}
            {/*<FunctionField label="Role" render={user => formatRoles(user.roles)}/>*/}
            {/*<TextField source="email" label="Email Address"/>*/}
            {/*<TextField source="phoneNumber" label="Phone Number"/>*/}
            {/*<FunctionField label="Status"*/}
            {/*render={user => user.voided === true ?*/}
            {/*'Deleted'*/}
            {/*: (user.disabledInCognito === true ? 'Disabled' : 'Active')}/>*/}
        </Datagrid>
    </List>
);
