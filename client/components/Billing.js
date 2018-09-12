import React, { Component } from "react";
import axios from "axios"

export default class Billing extends Component {
    componentDidMount(){
        let userId = "u2kjfladadwddj9​";
        let data = axios.get(`https://challenge.shipwithbolt.com/user/${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'crossDomain': true
            },
        });
        data.then(u => {
            console.log(u, "asdf")
        })
    }
    tableRows(){
        let rows = [];
        for (let i = 0; i < 7; i++){
            if (i === 2 ){
                rows.push(<td key={i} rowSpan="2">{i}</td>);
            } else {
                rows.push(<td key={i} >{i}</td>);
            }
        }
        return rows
    }
    render() {
        return <div className="pageContainer" style={{ flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "row", flex: 1, marginBottom: "2em" }}>
              <div style={{ display: "inline-block", alignSelf: "flex-start", flex: 1, flexDirection: "column" }}>
                <div>Your Balance:</div>
                <div>Payment Method</div>
              </div>
              <div style={{ flex: 5, display: "inline-block" }} />
              <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-end", flex: 1.8, flexDirection:"row" }}>
                    <input type="text" placeholder="Search Your Shipments" />
                    <i className="fa fa-search" id="searchIcon"></i>
              </div>
            </div>
            <div className="shipTable">
              <table>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Shipment</th>
                    <th style={{ width: "29vw" }}>Locations</th>
                    <th>Reference</th>
                    <th>Amount</th>
                    <th>Documents</th>
                  </tr>
                  <tr>{this.tableRows()}</tr>
                </tbody>
              </table>
            </div>
          </div>;
    }
}

