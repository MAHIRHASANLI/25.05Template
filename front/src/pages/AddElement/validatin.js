
import * as Yup from "yup"
export const ValidationSchema = Yup.object().shape({
   image: Yup.string().min(3).required(),
   name: Yup.string().min(5).required(),
   title: Yup.string().min(5).required(),
   about: Yup.string().min(5).required(),
  });