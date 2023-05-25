import * as React from "react";
import Style from "./index.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { DeletById, GetById } from "../../api/requests";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useGlobalData } from "../../global";

const DetailPage = () => {
  const [global, setGlobal] = useGlobalData();
  const [dataPage, setDataPage] = React.useState("");
  const id = useParams();
  React.useEffect(() => {
      GetById(id).then((res) => {console.log(res);
        // setDataPage(res)
      });
    },
    [id]
  );
  return (
    <div className={Style.DetailCard}>
      <Card
        className={Style.Cardd}
        style={{ height: "410px" }}
        sx={{ maxWidth: "100%" }}
      >
        <div className={Style.Daire}>
          <i style={{ fontSize: "50px" }} className={Style.image}></i>
        </div>
        <CardContent>
          <h5 className={Style.hh3}  variant="h5" component="div">
            {dataPage.name}
          </h5>

          <p className={Style.pp3} variant="body2" color="text.secondary">
            {dataPage.title}
          </p>
        </CardContent>
        <CardActions>
          <button className={Style.Button} size="small">
            {dataPage.about}
          </button>
          <button
            onClick={(_id) => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  DeletById(dataPage._id);
                  setGlobal(global.filter((m) => m._id !== dataPage._id));
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                }
              });
            }}
            style={{ marginLeft: "5px" }}
            className={Style.Button}
            size="small"
          >
            Delete
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default DetailPage;
