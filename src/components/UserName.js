import React from 'react';

const formatName = (user) => `${user.first} ${user.last}`;
const nameSurname = {
    first : 'Max',
    last : 'Mashkov'
};


export function ShowUserName() {
    return (
 <h1>{formatName(nameSurname)}</h1> )
}