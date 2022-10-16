import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaStore, FaMobileAlt, FaDollarSign, FaSlackHash, FaCoins, FaReact, FaTv, FaBatteryHalf, FaCamera, FaRuler, FaWeight } from "react-icons/fa";
import { Typography, Grid } from '@mui/material';
import SubHeader from '../../commun/SubHeader';

export default function DetailElementList(product) {
    const subHeadTitle = 'Technical features';

    return (
        <>
            <List style={{ paddingTop: '30px' }} >
                <Grid container>
                    <SubHeader title={subHeadTitle}></SubHeader>
                    <Grid item xs={6}>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaStore />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.brand} secondary="Brand" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaMobileAlt />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.model} secondary="Model" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaDollarSign />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography>${product.price}</Typography>} secondary="Price" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaSlackHash />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.cpu} secondary="CPU" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaCoins />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography>{product.ram} GB</Typography>} secondary="RAM" />
                        </ListItem>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaReact />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.operatingSystem} secondary="Operating System" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaTv />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.screenResolution} secondary="Screen Resolution" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaBatteryHalf />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography>{product.battery} mAh</Typography>} secondary="Battery" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaCamera />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.camera} secondary="Camera" />
                        </ListItem>
                        <ListItem style={{ paddingBottom: '0px' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaRuler />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography>{product.dimensions} mm</Typography>} secondary="Dimensions" />
                        </ListItem>
                    </Grid>
                    <ListItem style={{ paddingBottom: '0px' }}>
                        <ListItemAvatar>
                            <Avatar>
                                <FaWeight />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography>{product.weight} gr</Typography>} secondary="Weight" />
                    </ListItem>
                </Grid>
            </List>
        </>
    );
}
