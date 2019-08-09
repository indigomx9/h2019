import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Persons } from "./Persons";

const ALL_PERSONS = gql`
    {
        allPersons {
            name
            phone
            id
        }
    }
`;

export const Apollo = () => {
    return (
        <Query query={ALL_PERSONS}>
            {(result) => <Persons result={result} />}
        </Query>
    );
};

