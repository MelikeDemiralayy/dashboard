import {Flex,Button, Typography, Card, Avatar, Tooltip, Divider } from 'antd';
import React from 'react';

const SellerList = () => {
  return (
    <div>
      <Flex  justify="space-between" gap="large" className="seller-list-container">
        <Flex vertical='row' gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color view-all-button">
            View All
          </Button>
          </Flex>
          <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{
                    color:'f56a00',
                    backgroundColor:'#fde3cf',
                    cursor:'progress'
                }}>
                    <Tooltip title='User 1' placement='top' >
                        <Avatar src='https://www.shutterstock.com/image-photo/adult-avatar-image-on-light-260nw-2551670401.jpg'/>
                    </Tooltip>

                    <Tooltip title='User 2' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/5474025/pexels-photo-5474025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 3' placement='top' >
                        <Avatar src='https://www.shutterstock.com/image-vector/boss-human-avatar-formal-get-260nw-1088450498.jpg'/>
                    </Tooltip>

                    <Tooltip title='User 4' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/8147367/pexels-photo-8147367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 5' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/17949145/pexels-photo-17949145/free-photo-of-moda-insanlar-kadin-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 6' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/17822465/pexels-photo-17822465/free-photo-of-moda-kadin-sarisin-portre-modu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 7' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/8005447/pexels-photo-8005447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>
                </Avatar.Group>

                <Divider type='vertical' className='divider'/>
                <Flex vertical='row'>
                   <Typography.Text type='secondary' strong>
                    1,200 plant sold
                   </Typography.Text>

                   <Typography.Text type='secondary' strong>
                    10 seller
                   </Typography.Text>
                </Flex>
            </Flex>
          </Card>

        </Flex>

        <Flex vertical='row' gap="small" className="featured-seller">
          <Flex align='center' justify='space-between' >
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color  view-all-button">
            View All
          </Button>
          </Flex>

          <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{
                    color:'f56a00',
                    backgroundColor:'#fde3cf',
                    cursor:'progress'
                }}>
                    <Tooltip title='User 1' placement='top' >
                        <Avatar src='https://www.shutterstock.com/image-photo/adult-avatar-image-on-light-260nw-2551670401.jpg'/>
                    </Tooltip>

                    <Tooltip title='User 2' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/5474025/pexels-photo-5474025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 3' placement='top' >
                        <Avatar src='https://www.shutterstock.com/image-vector/boss-human-avatar-formal-get-260nw-1088450498.jpg'/>
                    </Tooltip>

                    <Tooltip title='User 4' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/8147367/pexels-photo-8147367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 5' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/17949145/pexels-photo-17949145/free-photo-of-moda-insanlar-kadin-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 6' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/17822465/pexels-photo-17822465/free-photo-of-moda-kadin-sarisin-portre-modu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>

                    <Tooltip title='User 7' placement='top' >
                        <Avatar src='https://images.pexels.com/photos/8005447/pexels-photo-8005447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Tooltip>
                </Avatar.Group>

                <Divider type='vertical' className='divider'/>
                <Flex vertical='row'>
                   <Typography.Text type='secondary' strong>
                    1,30 plant sold
                   </Typography.Text>

                   <Typography.Text type='secondary' strong>
                    13 seller
                   </Typography.Text>
                </Flex>
            </Flex>
          </Card>
        </Flex>
       
      </Flex>
    </div>
  );
};

export default SellerList;
