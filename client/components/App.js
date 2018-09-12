import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Billing from "./Billing"
import NavBar from "./NavBar"

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main" style={{ display: "flex" }}>
                <NavBar />
                <div style={{ flex: 1 }}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={() => (
                                <Billing />
                            )}
                        />
                            <Route
                                exact
                                path="/Billing"
                                component={() => (
                                    <Billing />
                                )}
                            />
                        <Route
                            render={() => {
                                return (
                                    <div
                                        className="row"
                                        style={{
                                            backgroundColor: "lightpink",
                                            height: "100vh",
                                            minWidth: "100vw",
                                            flex: 1
                                        }}
                                    >
                                        <div className="col align-self-center">
                                            <div style={{ textAlign: "center" }}>
                                                <h1>Error 404 Page Not Found</h1>
                                                <p> Or page is still in development </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }}
                        />
                    </Switch>
                </div>
                </div>
            </BrowserRouter>
        )
    }
}

