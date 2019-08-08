import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../components/Home";
import { Apollo } from "../components/Apollo";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/apollo" component={Apollo} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

