
import React, { useEffect, useState } from 'react'
import CardApprove from '../Components/CardApprove'
import css from "../styles/scss/main.scss"

import { ads } from '../constants/functions';
import api from '../services/api'

export default function Approve() {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    api.get('/approval').then((reponse) => {
      setGroups(reponse.data.groups)
    })
  }, [])
  return (
    <div className="container">
      {ads()}
      <main id="approveList">
        {
          groups.map(group =>
            <CardApprove key={group._id} group={group} />
          )
        }
      </main>
      {ads()}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}