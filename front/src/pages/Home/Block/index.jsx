import * as React from "react";
import Style from "./index.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
///CARD
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useGlobalData } from "../../../global";
import { DeletById, GetAll } from "../../../api/requests";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
const Block = () => {
  const [global, setGlobal] = useGlobalData();
  React.useEffect(() => {
    GetAll().then((res) => {
      setGlobal(res);
    });
  }, []);
 function handleChange(e){
  GetAll(e.target.value).then((res) => {
    setGlobal(res);
  });
 }
  return (
    <div className={Style.Divvv}>

      <Box sx={{ flexGrow: 1 }}>
        <div className={Style.Esasd}>
          <h1 className={Style.hhh}> ABOUT OUR BIZPRO</h1>

          <p className={Style.ppp}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
<div style={{width:"200px", margin:"20px auto  100px"}}>
<TextField   name="name" onChange={(e)=>handleChange(e)} id="outlined-basic" label="Search Name" variant="outlined" />
</div>
        <Grid container spacing={8}>
          {global &&
            global.map((item) => {
              return (
                <Grid key={item._id} item md={3} lg={3} sm={6} xs={12}>
                  <Card
                    className={Style.Cardd}
                    style={{ height: "410px" }}
                    sx={{ maxWidth: "100%" }}
                  >
                    <div className={Style.Daire}>
                      <i style={{fontSize:"35px"}} className={item.image}></i>
                    </div>
                    <CardContent>
                      <Link to={`/detailpage/${item._id}`}>
                      <h5
                        className={Style.hh3}
                        variant="h5"
                        component="div"
                      >
                        {item.name}
                      </h5>
                      </Link>
                    
                      <p
                        className={Style.pp3}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.title}
                      </p>
                    </CardContent>
                    <CardActions>
                      <button className={Style.Button} size="small">
                        {item.about}
                      </button>
                      <button
                        onClick={(_id)=>{
                          Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              DeletById(item._id)
                              setGlobal(global.filter(m=>m._id!==item._id))
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            }
                          })
                         
                        }}
                        style={{ marginLeft: "5px" }}
                        className={Style.Button}
                        size="small"
                      >
                        Delete
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Block;
