import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Profile() {
    return (
        <div>

            <Card sx={{ minWidth: 275, marginTop: "60px" }}>
                <Container>
                    <div style={{ display: "flex", gap: "80px" }}>
                        <Box position="static" style={{ padding: "15px 0", borderRadius: "5px", display: "flex", gap: "22px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuixzSE7GhrfWVc8c6hUOPmmbjM4ZoZNrLrEp3HtZWIw&s" style={{ width: "125px", height: "125px" }} />
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: '33px' }}>
                                    <Typography variant="h5" component="h2">
                                        Ahmad@gmail.com
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Ahmad1990
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Ahmad
                                    </Typography>
                                </div>
                            </div>
                        </Box>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ color: "slategrey", fontSize: "2rem", fontWeight: "300" }}>
                                <span style={{ fontSize: "5rem", color: "#acba20", fontWeight: "600" }}>5</span>Posts
                            </div>
                            <div style={{ color: "slategrey", fontSize: "2rem", fontWeight: "300" }}>
                                <span style={{ fontSize: "5rem", color: "#acba20", fontWeight: "600" }}>5</span>Comments
                            </div>
                        </div>



                    </div>
                </Container>

            </Card>




        </div>
    )
}
