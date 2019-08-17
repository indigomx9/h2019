import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Address {
        street: String!
        city: String!
    }

    type Person {
        id: ID!
        name: String!
        phone: String
        address: Address!
    }

    enum YesNo {
        YES
        NO
    }    

    type Query {
        personCount: Int!
        allPersons(phone: YesNo): [Person!]!
        findPerson(name: String!): Person
    }

    type Mutation {
        addPerson(
            name: String!
            phone: String
            street: String!
            city: String!
        ): Person
        
        editPerson(
            id: ID!
            name: String!
            phone: String!
            street: String!
            city: String!
        ): Person
    }
`;

