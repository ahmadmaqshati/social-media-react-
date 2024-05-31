import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';

import { useEffect, useState } from 'react';

export function Post() {
    //state for posts of resposnse
    const [posts, setPosts] = useState([])

    const baseUrl = 'https://tarmeezacademy.com/api/v1'

    //request for getting the posts
    /* async function getPost() {
        const response = await axios.get(`${baseUrl}/posts`)
        setPosts(response.data.data)
    }

    useEffect(() => {
        getPost()
    }, [])
 */

    return (

        <Card className='card' sx={{ marginTop: "70px", borderColor: "#D2D2D2" }} variant="outlined" >
            {

                posts.map((post) => {
                    let profileImage = ''
                    if (post.author.profile_image) {
                        profileImage = post.author.profile_image
                    }

                    let postImage = ''
                    if (post.image) {
                        postImage = post.image
                    }

                    return (
                        <Box sx={{ p: 2 }}>
                            <Stack direction="row" spacing={2} alignItems='center'>
                                <Avatar alt={profileImage} src={profileImage} />
                                {/* DATA FROM RESPONSE */}
                                <b>{post.author.username}</b>
                                {/* ==DATA FROM RESPONSE== */}
                            </Stack>
                            <br />
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Divider style={{ width: "107%" }} />
                            </Box>
                            <Link to={'/postdetails'}>
                                <div>
                                    <CardMedia
                                        component="img"
                                        height="494"
                                        image={postImage}

                                    />

                                    <Typography gutterBottom variant="h6" component="div" style={{ color: "#2f4f4fdb" }} key={post.id}>
                                        {/* DATA FROM RESPONSE */}
                                        {post.created_at}
                                        {/* ==DATA FROM RESPONSE== */}

                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="div" style={{ color: "black" }}>
                                        {/* DATA FROM RESPONSE */}
                                        {post.title}
                                        {/* ==DATA FROM RESPONSE== */}

                                    </Typography>
                                    <Typography gutterBottom variant="h6" style={{ fontSize: "1rem", marginBottom: "15px", color: "#000000d6" }}>
                                        {/* DATA FROM RESPONSE */}
                                        {post.body}
                                        {/* ==DATA FROM RESPONSE== */}
                                    </Typography>

                                    <Divider />
                                </div>
                            </Link>

                            <Stack direction="row" alignItems='center' gap='2px'>
                                <CreateIcon />
                                <Typography variant="h6" style={{ fontSize: "1.1rem", color: '#000000e3' }}>
                                    {/* DATA FROM RESPONSE */}
                                    {post.comments_count} Comments
                                    {/* ==DATA FROM RESPONSE== */}
                                </Typography>

                            </Stack>

                        </Box>

                    )
                })

            }







        </Card>

    );
}
