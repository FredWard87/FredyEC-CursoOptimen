import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Navigate from './Navigate';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import data from '../data/employees 2.json'
import Grid from '@mui/material/Grid';

function Home() {
    return (
        <div>
            <Navigate />
            <Grid container spacing={2}>
                {
                    data.Employees.map(employes => (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="https://t2.ea.ltmcdn.com/es/posts/2/6/6/alimentos_peligrosos_para_iguanas_bebes_20662_3_600.jpg"
                        alt="green iguana"
                    /> */}
                                    <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                                        <Avatar {...stringAvatar(employes.Name)} />
                                    </Stack>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {employes.Name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Spot: {employes.Spot}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Contract: {employes.Contract.Name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {employes.Skills.map(skill => (
                                                <Typography gutterButtom variant='body1' component="div">
                                                    Skill: {skill}
                                                </Typography>
                                            ))}
                                        </Typography>
                                        <Typography>
                                            {employes.Documents.map(document => (
                                                <Typography variant="body2" color="text.secondary">
                                                    {document.Name}, Expiration: {document.Expiration}
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 150,
            height: 150,
            fontSize: 80
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export default Home


/** rfce */
/** rfc */