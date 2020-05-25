import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import css from "../../styles/scss/main.scss"
import api from '../../services/api'
import Header from '../../Components/Header'
import Categories from '../../Components/Categories'
import GroupCard from '../../Components/GroupCard'

const Post = (id) => {
  const router = useRouter()
  const [groups, setGroups] = useState([])
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const { id } = router.query
    if (!id) return
    setCategory(id)
    api.get(`/category/${id}`).then(response => {
      setGroups(response.data.GroupList)
    })
    api.get(`/category`).then(response => {
      console.log('cat', response)
      setCategories(response.data.CategoryList)
    })
  }, [router.query])

  return (
    <>
      <Header />
      <Categories categories={categories} />
      <main>
        <div className="container">
          <h2 className="title">{category}</h2>
          <div className="feed">
            {groups.map((group) => (
              <GroupCard key={group._id} data={group} />
            ))}
            {/* <Pagination page={match.params.page} /> */}
          </div>
        </div>
      </main>
    </>

  )
}

export default Post
