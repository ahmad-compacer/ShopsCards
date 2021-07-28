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
    margin: theme.spacing(1),
    maxWidth: 170,
  },
  media: {
    padding: theme.spacing(3),
    height: 0,
    paddingTop: "4%",
  },
  cardsList: {
    height: 270,
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
          <br />
          <br />
          <br />{" "}
          <font face="Arial Black" size="4">
            {row.name}
          </font>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <font face="Times New Roman">
            <big>{row.description}</big>
          </font>
        </Typography>
      </CardContent>
      <div align="right">
        <font face="Georgia">
          <small>
            &nbsp; created in &nbsp; <br />
            &nbsp;{" "}
            {new Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(row.created))}
          </small>
        </font>
      </div>
    </Card>
  );
}

export default function ShopsCards({ items }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <ImageList className={classes.cardsList} cols={2.5}>
          <Grid container item xs={12} spacing={3}>
            {items.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </Grid>
        </ImageList>
      </div>
    </React.Fragment>
  );
}
