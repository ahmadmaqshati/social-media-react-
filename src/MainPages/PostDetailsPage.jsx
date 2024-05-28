import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CreateIcon from '@mui/icons-material/Create';

export function PostDetailsPage() {
    return (
        <div>

            <h1 style={{ marginTop: "50px", color: "slategrey", fontSize: "3rem" }}>PostDetails</h1>
            <Card sx={{ marginTop: "0px", borderColor: "#D2D2D2" }} variant="outlined" >
                <Box sx={{ p: 1.9 }}>
                    <Stack direction="row" spacing={2} alignItems='center'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <b>@yarhmm</b>
                    </Stack>
                    <br />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Divider style={{ width: "107%" }} />
                    </Box>

                    <div style={{ marginTop: "17px" }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSnI-xTL10x4um29IGOi5ts1zuHh5r-DDTodC1HUp4w&s'
                            alt="Paella dish"
                        />
                        <Typography gutterBottom variant="h6" component="div" style={{ color: "#2f4f4fdb" }}>
                            2 min ago
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: "black" }}>
                            Hello World
                        </Typography>
                        <Typography gutterBottom variant="h6" style={{ fontSize: "1rem", marginBottom: "15px", color: "#000000d6" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto sunt alias totam distinctio vitae? Ab quam iste libero, repellendus incidunt dicta saepe nisi perspiciatis voluptatibus dolor laborum magnam totam.
                        </Typography>

                        <Divider style={{ marginBottom: "25px" }} />
                    </div>


                    <Stack direction="row" alignItems='center' gap='2px'>
                        <CreateIcon />
                        <Typography variant="h6" style={{ fontSize: "1.1rem", color: '#000000e3' }}>
                            (3) Comments
                        </Typography>

                    </Stack>

                </Box>

                <div>
                    <div style={{ background: "#EFE4E4", display: "flex", flexDirection: 'column' }}>
                        <Box sx={{ p: 1.9 }} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuixzSE7GhrfWVc8c6hUOPmmbjM4ZoZNrLrEp3HtZWIw&s" style={{ width: '30px', height: '30px', borderRadius: "50%" }} />
                            <div style={{ background: "#F0F2F5", padding: '10px', borderRadius: "15px" }}>
                                <b>ahamdyarob</b>
                                <p>nice</p>
                            </div>
                        </Box>

                        <Box sx={{ p: 1.9 }} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuixzSE7GhrfWVc8c6hUOPmmbjM4ZoZNrLrEp3HtZWIw&s" style={{ width: '30px', height: '30px', borderRadius: "50%" }} />
                            <div style={{ background: "#F0F2F5", padding: '10px', borderRadius: "15px" }}>
                                <b>ahamdyarob</b>
                                <p>nice</p>
                            </div>
                        </Box>

                    </div>
                </div>

            </Card>

        </div>
    )
}



