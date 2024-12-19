import { Flex } from 'antd'
import React from 'react'
import ContentSideBar from './ContentSideBar'


const SideContent = () => {
  return (
    <Flex style={{ width: 300 }}> 
      <ContentSideBar/>
    </Flex>
  )
}

export default SideContent
