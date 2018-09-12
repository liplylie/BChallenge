import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Billing from "./Billing"

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: "flex" }}>
                    <Switch>
                        <Route
                            exact
                            path="/"
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
            </BrowserRouter>
        )
    }
}

