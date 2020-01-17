/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FaGithub, FaCode, FaThumbtack, FaChevronRight } from 'react-icons/fa';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import world from './assets/images/world.png';

function App() {
  const [devs, setDevs] = useState([]);

  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username: githubUsername,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <div className="register-icon">
          <img src={world} alt="Cadastrar" />
        </div>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">
              <FaGithub color="#6ff3d6" size={14} />
            </label>
            <input
              name="github_username"
              id="github_username"
              placeholder="Seu usuário no Github"
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">
              <FaCode color="#6ff3d6" size={14} />
            </label>
            <input
              name="techs"
              id="techs"
              placeholder="Tecnologias que você domina"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">
                <FaThumbtack color="#6ff3d6" size={14} />
              </label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                placeholder="Latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">
                <FaThumbtack color="#6ff3d6" size={14} />
              </label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                placeholder="Longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <li className="dev-item" key={dev.github_username}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />

                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github{' '}
                <FaChevronRight color="#fff" size={12} />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
