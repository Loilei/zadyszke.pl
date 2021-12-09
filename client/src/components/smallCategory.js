import { Component } from "react";
import { Typography } from "@mui/material";

class smallCategory extends Component {
  constructor(props) {
    super(props);
    this.imagePath = "";
    this.title = "";
  }

  render() {
    return (
      <div>
        <Typography>{this.title}</Typography>
        <img
          alt={this.title}
          src={this.imagePath}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </div>
    );
  }
}

export default smallCategory;