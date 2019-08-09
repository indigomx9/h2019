// Connection to the Model/Database.
import Person, { IPerson } from "../models/Person";

import uuid from "uuid";
import { UserInputError } from "apollo-server-express";

export const resolvers = {
    Query: {
        personCount: () => Person.collection.countDocuments,
        allPersons: () => Person.find({}),
        findPerson: (obj, args) => Person.findOne({ name: args.name }),
    },

    Person: {
        address: (obj) => {
            return {
                street: obj.street,
                city: obj.city
            }
        }
    },

    Mutation: {
        addPerson: async (obj, args) => {
            try {
                const person: IPerson = await new Person({ ...args });
                return person.save();
            } catch (err) {
                console.log(err);
            }
        },

        editNumber: async (obj, { id, ...args}) => {
            try {
                return await Person.update(id, args);
            } catch (err) {
                console.log(err);
            }
        },
    }
};

