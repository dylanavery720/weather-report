  import React from 'react'
  import Card from '../components/Card/Card'
  
  const loadCards = (array) => {
    return array.map(payload => {
        return <Card payload={payload} />
    })
  }

  export default loadCards