import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ImageList from "@material-ui/core/ImageList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    maxWidth: 200,
  },
  media: {
    height: 20,
    margin: 20,
    padding: "20%",
    padding: theme.spacing(3),
  },
}));

const useBoxStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    height: 400,
    transform: "translateZ(0)",
  },
}));

function Row(props) {
  const { row } = props;
  const classes = useStyles();

  return (
    <Card elevation={6} className={classes.root}>
      <CardMedia className={classes.media}>
        <img src={row.icon} height="88px" width="120px" />
      </CardMedia>
      <CardContent>
        <Typography paragraph>
          <br /> <h3>{row.name}:</h3>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <h4>{row.description}</h4>
        </Typography>
      </CardContent>
      <inherit align="zIndex">
          &nbsp; created in:  
          &nbsp; {new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(row.created))}
      </inherit>
    </Card>
  );
}

export default function ShopsCards({ items }) {
  const classes = useBoxStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>
          <Grid container item xs={12} spacing={2}>
            {items.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </Grid>
        </ImageList>
      </div>
    </React.Fragment>
  );
}
