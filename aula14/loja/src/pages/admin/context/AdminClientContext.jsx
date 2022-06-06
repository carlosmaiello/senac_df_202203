import React, { useState } from 'react';

export const Context = React.createContext();

export default function AdminClientContext({children}) {
    const [clients, setClients] = useState([]);

    //CRUD
    const create = (client) => {
        const data = [
            ...clients,
            client
        ];
        setClients(data);
    }

    const update = () => {
    }

    const remove = () => {
    }

    const list = () => {
        fetch("https://fakestoreapi.com/users")
          .then((res) => res.json())
          .then((json) => setClients(json));
    }

    return (
        <Context.Provider value={{clients, create, update, remove, list}}>
            {children}
        </Context.Provider>
    );
}