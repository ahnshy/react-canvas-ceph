import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
