// Connection to the Model/Database.
import Person, { IPerson } from "../models/Person";
import { UserInputError } from "apollo-server-express";

export const resolvers = {
    Query: {
        personCount: () => Person.collection.countDocuments,
        allPersons: () => Person.find({}),
        findPerson: (obj: any, args: any) => Person.findOne({ name: args.name }),
    },

    Person: {
        address: (obj: any) => {
            return {
                street: obj.street,
                city: obj.city
            }
        }
    },

    Mutation: {
        addPerson: async (obj: any, args: any) => {
            try {
                const person: IPerson = await new Person({ ...args });
                return person.save();
            } catch (error) {
                throw new UserInputError(error.message, {
                    invalidArgs: args,
                })
            }
        },

        editPerson: async (obj: any, id: any, args: any) => {
            try {
                return await Person.update(id, {args});
            } catch (error) {
                throw new UserInputError(error.message, {
                    invalidArgs: args,
                })
            }
        },
    }
};

