import {useFormik} from "formik"
import { ValidationSchema } from './validatin'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { PostById } from '../../api/requests';
import {  useNavigate } from "react-router-dom";
import React from "react";
import {Helmet} from "react-helmet";
const AddElement = () => {
  const navigate = useNavigate()
  function handleSubmit(values,actions){
    console.log(values);
    PostById(values)
    actions.resetForm()
    navigate("/")
  }
const formik = useFormik({
initialValues:{
  image:"",
  name:"",
  title:"",
  about:""
},
validationSchema:ValidationSchema,
onSubmit: handleSubmit
})

  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add Element</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{width:"50%" , margin:"200px auto"}}>
       <form onSubmit={formik.handleSubmit}>
          <TextField  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.image} name='image' error={formik.errors.image && formik.touched.image ? true:false} id="outlined-basic" label="Icons" variant="outlined" />
          <TextField  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' error={formik.errors.name && formik.touched.name ? true:false} id="outlined-basic" label="Name" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} name='title' error={formik.errors.title && formik.touched.title ? true:false} id="outlined-basic" label="Title" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.about} name='about' error={formik.errors.image && formik.touched.about ? true:false} id="outlined-basic" label="About" variant="outlined" />
          <Button variant='contained' style={{display:"block", margin:"30px auto"}} type='submit'>ADD DATA</Button>
      </form>
     </div>
</div>
     
  )
}

export default AddElement