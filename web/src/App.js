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
  const [activeEdit, setActiveEdit] = useState(false);
  const [editDev, setEditDev] = useState({});

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    try {
      const response = await api.post('/devs', data);

      setDevs([...devs, response.data]);

      toast('Dev cadastrado com sucesso.');
    } catch {
      toast.error('Erro ao cadastrar dev.');
    }
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

  async function handleUpdateDev(dev) {
    const { _id, github_username, techs } = dev;

    try {
      await api.put(`/devs/${_id}`, {
        techs: Array.isArray(techs) ? techs.join() : techs,
        github_username,
      });
      setDevs([...devs]);
      setActiveEdit(false);

      toast('Dev alterado com sucesso.');
    } catch {}
  }

  async function handleEditDev(dev) {
    setActiveEdit(true);
    setEditDev(dev);
  }

  return (
    <div id="app">
      <aside>
        <div className="register-icon">
          <img src={world} alt={activeEdit ? 'Editar' : 'Cadastrar'} />
        </div>
        <strong>{activeEdit ? 'Editar' : 'Cadastrar'}</strong>
        <DevForm
          onSubmit={activeEdit ? handleUpdateDev : handleAddDev}
          editFields={editDev}
        />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              dev={dev}
              key={dev._id}
              onDelete={handleRemoveDev}
              onEdit={handleEditDev}
            />
          ))}
        </ul>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
