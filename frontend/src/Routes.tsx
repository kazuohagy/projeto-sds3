import DashBoard from 'pages/DashBoard';
import Home from 'pages/Home';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
function Routes() {
    return (
        <div >
            <BrowserRouter>
                <Switch>
                    <Route path ="/" exact>
                        <Home/>
                    </Route>
                    <Route path ="/dashboard">
                        <DashBoard/>
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
