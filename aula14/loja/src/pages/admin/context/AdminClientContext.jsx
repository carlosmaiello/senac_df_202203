import React, { useState } from 'react';

export const Context = React.createContext();

export default function AdminClientContext({children}) {
    const [clients, setClients] = useState([]);

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
    }

    return (
        <Context.Provider value={{clients, create, update, remove, list}}>
            {children}
        </Context.Provider>
    );
}