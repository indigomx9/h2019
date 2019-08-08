import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
            {(result) => {
                if (result.loading) {
                    return <div>loading...</div>
                }
                return (
                    <React.Fragment>
                        <h1 className="banner">Apollo</h1>
                        {result.data.allPersons.map(
                            (person) => person.name).join(", ")
                        }
                    </React.Fragment>
                );
            }}
        </Query>
    );
};

