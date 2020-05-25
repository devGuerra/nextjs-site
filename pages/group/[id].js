import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { ads } from '../../constants/functions'
import css from "../../styles/scss/main.scss"
import api from '../../services/api'
import Header from '../../Components/Header'
import Categories from '../../Components/Categories'
import GroupCard from '../../Components/GroupCard'

const Post = (id) => {
  const router = useRouter()
  const [groups, setGroups] = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    const { id } = router.query
    if (!id) return
    setCategory(id)
    api.get(`/groups/${id}`).then(response => {
      setGroups(response.data.group)
    })
  }, [router.query])

  return (
    <>
      <Header />
      <main className="groupDetails">
        {ads()}
        <div className="container">
          <div className="feed">
            <GroupCard data={groups} />
            {/* <Pagination page={match.params.page} /> */}
          </div>
        </div>
        {ads()}
      </main>
    </>

  )
}

export default Post
