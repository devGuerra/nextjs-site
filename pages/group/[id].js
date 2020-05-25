import React, { useState, useEffect } from 'react'
import Head from 'next/head'
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
