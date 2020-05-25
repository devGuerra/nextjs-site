import React, {useState} from 'react';
import api from '../../services/api'

// import { Container } from './styles';

function CardApprove( {group}) {
  const [grupo, setGrupo] = useState(group)

  const handleReprove = async () => {
    try {
      const reprove = await api.delete(`/groups/${grupo._id}`)
      setGrupo([])
    } catch (err) {
      console.log({error: err})
    }
  }
  const handleApprove = async () => {

    try {
      
      const approve = await api.post(`/approval/${grupo._id}`, {
        active: true
      })
      setGrupo([])
    } catch (err) {
      console.log({error: err})
    }
  }
  return (
    <>
    {
      grupo ? (
        <div className="cardApprove">
      <div className="description">
        <img src={grupo.avatar} alt=""/>
        <h2>{grupo.name}</h2>
        <p>{grupo.description}</p>
        <span>{grupo.category}</span>
        <span>{grupo.created}</span>
      </div>
      <div className="btn-container">
        <button className="btn-reprove" onClick={() => handleReprove()}>
          Reprovar
        </button>
        <button className="btn-chat">
          <a href={grupo.url} target="_blank">Link</a>
        </button>
        <button className="btn-approve" onClick={() => handleApprove()}>
          Aprovar
        </button>
      </div>
    </div>
      ) : <div />
    }
    </>
    
    );
}

export default CardApprove;