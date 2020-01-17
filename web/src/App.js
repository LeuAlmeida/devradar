/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

export default function src() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                distinctio obcaecati velit quia beatae eius deserunt omnis
                tempora, deleniti molestias, culpa dolore amet cumque! Possimus
                odit fugiat delectus vitae tempore?
              </p>
              <a href="https://github.com/leualmeida">
                Acessar perfil no Github
              </a>
            </header>
          </li>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                distinctio obcaecati velit quia beatae eius deserunt omnis
                tempora, deleniti molestias, culpa dolore amet cumque! Possimus
                odit fugiat delectus vitae tempore?
              </p>
              <a href="https://github.com/leualmeida">
                Acessar perfil no Github
              </a>
            </header>
          </li>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                distinctio obcaecati velit quia beatae eius deserunt omnis
                tempora, deleniti molestias, culpa dolore amet cumque! Possimus
                odit fugiat delectus vitae tempore?
              </p>
              <a href="https://github.com/leualmeida">
                Acessar perfil no Github
              </a>
            </header>
          </li>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                distinctio obcaecati velit quia beatae eius deserunt omnis
                tempora, deleniti molestias, culpa dolore amet cumque! Possimus
                odit fugiat delectus vitae tempore?
              </p>
              <a href="https://github.com/leualmeida">
                Acessar perfil no Github
              </a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}
