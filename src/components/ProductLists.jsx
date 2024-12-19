import { Button, Flex, Typography,Image,Card } from 'antd'
import React from 'react'
import plantsData from '../plantData'


const {Meta} = Card;
const ProductLists = () => {
  return (
    <div>
    <Flex align='center' justify='space-between' style={{ marginBottom: '1.5rem' }}>
      <Typography.Title level={3} strong className='primary--color'>
        My Listing
      </Typography.Title>
      <Button type='link' className='gray--color view-all-button'>
        View All
      </Button>
    </Flex>

    <Flex align='center' gap='large'>
      {plantsData.map((plant) => (
        <Card key={plant.id} hoverable className='plant-card'>
          <Image src={plant.picture} style={{ width: '130px' }} />
          <Meta title={plant.name} style={{marginTop:'1rem'}}/>
        </Card>
      ))}
    </Flex>
  </div>

  )
}

export default ProductLists
