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
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/42948574?s=460&v=4"
                alt="Léu Almeida"
              />

              <div className="user-info">
                <strong>Léu Almeida</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              distinctio obcaecati velit quia beatae eius deserunt omnis
              tempora, deleniti molestias, culpa dolore amet cumque! Possimus
              odit fugiat delectus vitae tempore?
            </p>
            <a href="https://github.com/leualmeida">
              Acessar perfil no Github <FaChevronRight color="#fff" size={12} />
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
