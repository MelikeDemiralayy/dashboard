import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/transfer/search'
import React from 'react'
import {MessageOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'

const CustomHeader = () => {
  return (
   <Flex align='center' justify='space-between'>
    <Typography.Title level={3} type='secondary'>
        Welcome back  , Melike🌲
    </Typography.Title>

    

    <Flex align='center' gap='10px'>
    <Flex align='center' justify='space-between' gap='3rem'>
        <Search placeholder='Seacrh Dashboard' allowClear/>
    </Flex>

      <MessageOutlined className='header-icon' />
      <NotificationOutlined className='header-icon'/>
      <Avatar icon={<UserOutlined/>} />
    </Flex>
 
   </Flex>
  )
}

export default CustomHeader
