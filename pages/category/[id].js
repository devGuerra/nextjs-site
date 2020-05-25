import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'

import css from "../../styles/scss/main.scss"
import { ads } from '../../constants/functions'
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
      <Head>
        <title>Gerazap - links de grupo do whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A melhor lista de links de grupos de WhatsApp que você já conheceu. É grátis, simples e fácil você encontrar e entrar em um grupo de WhatsApp. Apenas um clique!"></meta>
        <script data-ad-client="ca-pub-2270636537108959" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkgrupos.app/" />
        <meta property="og:site_name" content="WhatsApp Group Links" />
      </Head>
      <Header />
      <Categories categories={categories} />
      <main>
        <div className="container">
          <h2 className="title">{category}</h2>
          {ads()}
          <div className="feed">
            {groups.map((group) => (
              <GroupCard key={group._id} data={group} />
            ))}
            {/* <Pagination page={match.params.page} /> */}
          </div>
        </div>
        {ads()}
      </main>
    </>

  )
}

export default Post
