import React from 'react';
import { FaChevronRight, FaTrash, FaPencilAlt } from 'react-icons/fa';

import './styles.css';

function DevItem({ dev, onDelete, onEdit }) {
  function deleteDev() {
    onDelete(dev._id);
  }

  function editDev() {
    onEdit(dev);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />

        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs ? dev.techs.join(', ') : ''}</span>
        </div>
        <div className="user-actions">
          <button type="submit">
            <FaPencilAlt color="#FFF" size={12} onClick={editDev} />
          </button>
          <button type="submit" onClick={deleteDev}>
            <FaTrash color="#FFF" size={12} />
          </button>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github <FaChevronRight color="#fff" size={12} />
      </a>
    </li>
  );
}

export default DevItem;
