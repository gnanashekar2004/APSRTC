import React, { Fragment, useEffect, useState } from "react";
import { deletebooking, getbookingsofuser, getuserbyid } from "../api-helpers/api-helpers";
import { Box, List, ListItem, ListItemText, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Userprofile = ()=>{
    const [bookings, setbookings] = useState();
    useEffect(()=>{
        getbookingsofuser().then((res)=>setbookings(res.bookings)).catch((err)=>console.log(err));
    },[]);
    const [user, setuser] = useState();
    useEffect(()=>{
        getuserbyid().then((res)=>setuser(res.user)).catch((err)=>console.log(err));
    },[]);
    console.log(user);
    console.log(bookings);
    const handledelete = (id) =>{
        deletebooking(id).then((res)=>console.log(res)).catch((err)=>console.log("Deletion Unsuccessful"));
        alert("Deleted booking successfully");
        window.location.reload(false);
    };
    return (
        <Box width={'100%'} display={"flex"} >
            {user && <Fragment>
                <Box padding={3}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"} 
                width={'30%'} display={"flex"}>
                    <AccountCircleIcon sx={{fontSize:"10rem", textAlign:"center", ml:3}} />
                    <Typography padding={1} width={"auto"} textAlign={"center"} border={'1px solid #ccc'} borderRadius={6} >
                        Username : {user.username}
                    </Typography>
                    <Typography padding={1} width={"auto"} textAlign={"center"} border={'1px solid #ccc'} borderRadius={6} >
                        Email : {user.email}
                    </Typography>
                    <Typography padding={1} width={"auto"} textAlign={"center"} border={'1px solid #ccc'} borderRadius={6} >
                        Total bookings : {user.bookings.length}
                    </Typography>
                </Box>

            </Fragment>}
            
            {
                bookings && bookings.length>0 && (
                    <Fragment>
                        <Box width={'70%'} display={"flex"} flexDirection={"column"} >
                        <Typography variant="h4" fontFamily={"verdana"} textAlign={"center"}>
                        User Bookings
                        </Typography>
                        <Box margin={"auto"}
                            display={"flex"}
                            flexDirection={"column"}
                            width={"80%"}
                        >
                            <List>
                                {bookings.map((booking, index)=>(
                            
                                    <ListItem sx={{bgcolor: "#00d386",color:"white",textAlign:"center",margin:1}}>
                                        <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}} >
                                            Date: {new Date(booking.date).toDateString()}<br/>
                                            No. of seats: {booking.seatnumber}<br/>
                                            Bus Number: {booking.busnumber}<br/>
                                            From: {booking.from}<br/> To: {booking.to}
                                        </ListItemText>
                                        <IconButton color="error" onClick={()=>handledelete(booking._id)}>
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        </Box>
                    </Fragment>
                )
            }
        </Box>
    );
};


export default Userprofile;