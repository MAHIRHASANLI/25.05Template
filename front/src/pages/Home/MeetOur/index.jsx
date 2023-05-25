import * as React from "react";
import Style from "./index.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
///Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MeetOur = () => {
  const array = [1, 2, 3];
  return (
    <div className={Style.Divvv}>
      <div className={Style.Esasd}>
        <h1 className={Style.hhh}>MEET OUR TEAM</h1>

        <p className={Style.ppp}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          {array &&
            array.map((item, ind) => {
             return(
                <Grid key={ind} item xs={12}  md={4}>
                <Card className={Style.Cardd} sx={{ maxWidth: "100%" }}>
                     <CardMedia
                       sx={{ height: "75%" }}
                       image="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg"
                       title="green iguana"
                     />
                     <CardContent>
                       <h5 className={Style.hhh5}  variant="h5" component="div">
                         Gonzaled Gina
                       </h5>
                       <p className={Style.ppp5} variant="body2" color="text.secondary">
                      Web Developer
                       </p>
                     </CardContent>
                  
                   </Card>
               
                             </Grid>
             )
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default MeetOur;
