// Connection to the Model/Database.
let persons = [
    {
      name: "Arto Hellas",
      phone: "040-123543",
      street: "Tapiolankatu 5 A",
      city: "Espoo",
      id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
      name: "Matti Luukkainen",
      phone: "040-432342",
      street: "Malminkaari 10 A",
      city: "Helsinki",
      id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
      name: "Venla Ruuska",
      street: "Nallemäentie 22 C",
      city: "Helsinki",
      id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
]

import uuid from "uuid";
import { UserInputError } from "apollo-server-express";

export const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: (obj, args) => {
            if (!args.phone) {
                return persons;
            }
            const byPhone = (person) => 
                args.phone === "YES" ? person.phone : !person.phone
            return persons.filter(byPhone);
        },
        findPerson: (obj, args) => 
            persons.find(persons => persons.name === args.name)
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
        addPerson: (obj, args) => {
            if (persons.find((persons) => persons.name === args.name)) {
                throw new UserInputError("Name must be unique", {
                    invalidArgs: args.name,
                })
            }

            const person = { ...args, id: uuid() }
            persons = persons.concat(person);
            return person;
        },

        editNumber: (obj, args) => {
            const person = persons.find(
                (persons) => persons.name === args.name);
            if (!person) {
                return null;
            }

            const updatedPerson = { ...person, phone: args.phone }
            persons = persons.map(
                (persons) => persons.name === args.name ? 
                    updatedPerson : person);
            return updatedPerson;
        },
    }
};

