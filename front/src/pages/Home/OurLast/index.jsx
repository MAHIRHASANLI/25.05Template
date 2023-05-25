import Style from "./index.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const OurLast = () => {
  const array = [1, 2, 3];
  return (
    <div className={Style.Divs}>
      {" "}
      <div className={Style.Esasd}>
        <h1 className={Style.hhh}>OUR LATEST BLOG</h1>

        <p className={Style.ppp}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.{" "}
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={9}>
          {array &&
            array.map((item, ind) => {
              return (
                <Grid key={ind} item md={4} lg={4} sm={6} xs={12}>
                  <Card className={Style.Cardd} sx={{ maxWidth: "420px" }}>
                    <CardMedia
                      className={Style.Img}
                      sx={{ height: "210px" }}
                      image="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <h6
                        className={Style.imgpp}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Playback: Akufo-Addo speaks to business community
                      </h6>

                      <p className={Style.PPP}>
                        Posted by{" "}
                        <strong style={{ color: "red" }}>admin</strong> at 04
                        Feb, 2017
                      </p>
                      <p
                        className={Style.PPP}
                        variant="body2"
                        color="text.secondary"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sagittis iaculis velit in tristique. Curabitur ac
                        urna urna sed accumsan... Read More
                      </p>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default OurLast;
