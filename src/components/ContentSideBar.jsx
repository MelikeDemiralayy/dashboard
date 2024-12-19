import { Card, Flex, Typography, Image } from 'antd'
import React from 'react'
import plant from '../../public/assets/images/plant.png';


const ContentSideBar = () => {
  return (
   <div>
    <Card className='card'>
        <Flex vertical gap='large'>
            <Typography.Title level={4} strong>
                Today <br/> 7 orders
            </Typography.Title>

            <Typography.Title level={4} strong>
                This Month <br/>
                240 orders
            </Typography.Title>
        </Flex>
        <Image src={plant} alt='plant' style={{position:'absolute', bottom:-50, left:100,  height:'190px', width:'auto'}} />

    </Card>
   </div>
  )
}

export default ContentSideBar;
