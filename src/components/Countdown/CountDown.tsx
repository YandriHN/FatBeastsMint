import React from "react";
import {Typography, Paper, useTheme} from "@mui/material";
import "./count_down.css"
import isMobile from "../isMobile";

export const CountDown = ({days, hours, minutes, seconds}: any) => {
    const theme = useTheme()
    const mobileMarker = isMobile()

    return (
        <div className="countDown-container" style={{
            marginTop: mobileMarker ? '1rem' : 0,
            marginBottom: mobileMarker ? '1rem' : 0
        }}>
            <Paper elevation={0} className="item-container"
                   style={{
                       backgroundColor: theme.palette.primary.light,
                       marginRight: window.innerWidth > 480 ? '1rem' : '1rem',
                       textAlign: 'center'
                   }}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'}
                            style={{fontFamily: 'Main', color: '#fff', fontWeight: 'bold'}}>
                    {days < 10 ? `0${days}` : days}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} style={{
                    color: '#000000', fontFamily: 'Main'
                }}>days</Typography>
            </Paper>
            <Paper elevation={0} className="item-container"
                   style={{
                       backgroundColor: theme.palette.primary.light,
                       marginRight: window.innerWidth > 480 ? '1rem' : '1rem'
                   }}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'}
                            style={{fontFamily: 'Main', color: '#fff', fontWeight: 'bold'}}>
                    {hours < 10 ? `0${hours}` : hours}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} style={{
                    color: '#000000', fontFamily: 'Main'
                }}>hrs</Typography>
            </Paper>
            <Paper elevation={0} className="item-container"
                   style={{
                       backgroundColor: theme.palette.primary.light,
                       marginRight: window.innerWidth > 480 ? '1rem' : '1rem'
                   }}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'}
                            style={{fontFamily: 'Main', color: '#fff', fontWeight: 'bold'}}>
                    {minutes < 10 ? `0${minutes}` : minutes}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} style={{
                    color: '#000000', fontFamily: 'Main'
                }}> mins </Typography>
            </Paper>
            <Paper elevation={0} className="item-container" style={{backgroundColor: theme.palette.primary.light,}}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'}
                            style={{fontFamily: 'Main', color: '#fff', fontWeight: 'bold'}}
                >
                    {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} style={{
                    color: '#000000', fontFamily: 'Main'
                }}> secs</Typography>
            </Paper>
             </div>
        
            <Paper style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.primary.light,
                    marginTop: mobileMarker ? '0.5rem': 0,
                    marginBottom: mobileMarker ? '0.5rem': 0,
                }}>
                        <div style={{ display: 'flex',
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                <Typography display="inline" variant="h6" style={{
                            color: '#fff',
                            fontFamily: 'Main',
                            fontWeight: 'bold',
                            textAlign: 'center',

                 }}>
                   Till the Public Mint
                </Typography>
            </Paper>
        </div>
    );
};
