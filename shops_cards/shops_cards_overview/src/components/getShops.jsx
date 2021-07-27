import React, { Component } from "react";   
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShopsCards from '../views/shopsCards'

var rows = [];

export default class GetAllShops extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }

    componentDidMount() {
      this.loadAccounts();
    }

    loadAccounts() {
        axios
        .get("https://business-integration-comsrv-test.compacer.net/shops/api/v1/shops")
        .then(res => {
          rows = res.data;
          this.setState({ dataLoaded: true });
        })
        .catch((res) => {
          if (res.status === undefined) {
            alert('Error!');
          }
        });
    }
    render() {
      if (this.state.dataLoaded) {
        return <ShopsCards items = {rows}/>;
    } else {
      const style = { textAlign: "center" };
      return (
        <div style={style}>
          <CircularProgress disableShrink />
        </div>
      );
      }
    }
}