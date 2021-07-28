import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ImageList from "@material-ui/core/ImageList";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  media: {
    padding: theme.spacing(3),
    height: 0,
    paddingTop: "4%",
  },
  cardsList: {
    height: 270,
    margin: "70%",
    paddingTop: "1%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "left",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardsBox: {
    margin: "7%",
    paddingTop: "0%",
  },
}));

function Row(props) {
  const { row } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={6} className={classes.root}>
      <CardMedia className={classes.media}>
        <img src={row.icon} height="88px" width="120px" />
      </CardMedia>
      <CardContent>
        <br /><br /><br />
        <font face="Arial Black" size="4">
          {row.name}
        </font>
        <Typography>
          <CardActions disableSpacing>
            <font face="Poppins " size="16px" align="left">
              Description
            </font>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ImageList cols={2.5}>
                <font face="Poppins" color="#656565" size="16px">
                  <big>{row.description}</big>
                </font>
              </ImageList>
            </CardContent>
          </Collapse>
        </Typography>
      </CardContent>
      <div align="right">
        <font face="Georgia">
          <small>
            created in &nbsp; <br />
            {new Intl.DateTimeFormat("gr", {
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
      <div className={classes.cardsBox}>
        <ImageList
          className={classes.cardsList}
          container
          item
          xs={12}
          spacing={60}
        >
          {items.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </ImageList>
      </div>
    </React.Fragment>
  );
}

