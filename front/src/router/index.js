import AddElement from "../pages/AddElement";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Notfaund from "../pages/NotFaund";

export const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'addelement',
                element:<AddElement/>
            },
            {
                path:'detailpage/:id',
                element:<DetailPage/>
            },
            {
                path:'*',
                element:<Notfaund/>
            }
        ]
    }
]