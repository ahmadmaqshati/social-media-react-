import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { Padding } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';


export default function Post() {
    return (
        <Card className='card' sx={{ marginTop: "70px", borderColor: "#D2D2D2" }} variant="outlined" >
            <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} alignItems='center'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <b>@yarhmm</b>
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

                        <Divider />
                    </div>
                </Link>

                <Stack direction="row" alignItems='center' gap='2px'>
                    <CreateIcon />
                    <Typography variant="h6" style={{ fontSize: "1.1rem", color: '#000000e3' }}>
                        (3) Comments
                    </Typography>

                </Stack>




            </Box>



        </Card>

    );
}
/*  */