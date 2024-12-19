import { Flex,Button,Typography, List, Avatar } from 'antd'
import React from 'react'



const data=
    [
        { "name": "Alice", "orderTime": 1 },
        { "name": "Bob", "orderTime": 2 },
        { "name": "Charlie", "orderTime": 3 },
        { "name": "David", "orderTime": 4 },
        { "name": "Eve", "orderTime": 5 },
        { "name": "Michael", "orderTime": 2 },
        { "name": "Donald", "orderTime": 8 },
      ]
      

const Activity = () => {
  return (
    <Flex vertical gap='small'>
        <Flex align='center' justify='space-between' gap='large'>
        <Typography.Title level={3} strong className='primary--color'>
        Recent Activity
      </Typography.Title>
      <Button type='link' className='gray--color view-all-button'>
        View All
      </Button>
        </Flex>

        <List
  pagination
  dataSource={data}
  renderItem={(user, index) => (
    <List.Item>
      <List.Item.Meta
       avatar={<Avatar src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff`} />}

        title={<a href="#">{user.name}</a>}
        description="ordered by new plant"
      />
      <span className="gray--color">
        {user.orderTime} {user.orderTime === 1 ? "day ago" : "days ago"}
      </span>
    </List.Item>
  )}
/>

    </Flex>
  )
}

export default Activity
