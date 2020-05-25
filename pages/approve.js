
import React from 'react'
import CardApprove from '../Components/CardApprove'
import css from "../styles/scss/main.scss"
import api from '../services/api'

export default function Approve({groups}) {
  return (
    <div className="container">
      <main id="approveList">
        {
          groups.map(group => 
            <CardApprove key={group._id} group={group} />
          )
        }
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await api.get('/approval')
  const {groups} = await res.data
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { 
      groups,
    },
  }
}