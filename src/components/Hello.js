import React from 'react';
const formatName = (user) => `${user.first} ${user.last}`;
const nameSurname = {
    first : 'Max',
    last : 'Mashkov'
};

export const element = <h1>{formatName(nameSurname)}</h1>;
