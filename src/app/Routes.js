import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";

        
import {App} 
        from "./App";
import Home from "./components/Home";
import About from "./components/Home";
import Contact from "./components/Contact";
import States from "./container/States";
import StateView from "./container/StateView";
import StateEdit from "./container/StateEdit";

export default function Routes (props)
{

return(
<Router>
<App>
<Switch>
<Route path="/"  exact   component={Home} />
<Route path="/about"   component={About} />
<Route path="/contact"   component={Contact} />
<Route path="/states/" exact component ={States}/>
<Route path="/states/view/:id" exact component ={StateView}/>
<Route path="/states/edit/:id" exact component ={StateEdit}/>
    </Switch>
</App>
</Router>


)


}