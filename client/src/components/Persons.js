import React from "react";

export const Persons = ({ result }) => {
    if (result.loading) {
        return <section>loading...</section>
    };

    const persons = result.data.allPersons;
    return (
        <React.Fragment>
            <h1 className="banner">Persons</h1>
            {persons.map((person) => (
                <aside key={person.name}>
                    {person.name} {person.phone}
                </aside>
            ))}
        </React.Fragment>
    );
};

