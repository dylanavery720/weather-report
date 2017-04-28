  import React from 'react'
  import Card from '../components/Card/Card'
  
  const loadCards = (array) => {
    return array.map((payload, i) => {
        return <Card key={i} payload={payload} />
    })
  }

  export default loadCards