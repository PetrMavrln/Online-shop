import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import DeviceStore from 'store/DeviceStore';
import UserStore from 'store/UserStore';
import App from './App';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>
);