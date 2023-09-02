import React, { Component } from 'react'
import TopTitle from '../../../../components/TopTitle';
import BLogCard from '../../../../components/BLogCard';
import Container from '../../../../components/Container';
import './style.css';
import { BLOGS } from '../../../../mock/BLogsData';

class BLogs extends Component {


    render() {
        return (
            <>
                <TopTitle maintitle='Blogs' suptitle='words from our food lovers' />
                <Container>
                    <div className='blog-row'>
                        {BLOGS.map((blog) => (
                            <BLogCard key={blog.id} blogimage={blog.blogimage} blogtitle={blog.blogtitle} blogdesc={blog.blogdesc}
                                bloglinktext={blog.bloglinktext} bloglink={blog.bloglink} resvcol={blog.resvcol} />

                        ))}

                    </div>
                </Container>

            </>
        )
    }
}


export default BLogs;