import React, { useState, useEffect } from 'react';
import { FaGithub, FaCode, FaThumbtack } from 'react-icons/fa';
import './styles.css';

function DevForm({ onSubmit }) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username: githubUsername,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default DevForm;
