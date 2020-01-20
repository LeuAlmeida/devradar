/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import world from './assets/images/world.png';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleRemoveDev(id) {
    try {
      await api.delete(`/devs/${id}`);

      setDevs(devs.filter(dev => dev._id !== id));

      toast('Dev removido com sucesso.');
    } catch {
      toast.error('Erro ao remover esse dev.');
    }
  }

  return (
    <div id="app">
      <aside>
        <div className="register-icon">
          <img src={world} alt="Cadastrar" />
        </div>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} onDelete={handleRemoveDev} />
          ))}
        </ul>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
