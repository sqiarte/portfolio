import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import style from './Project.module.css'

function Cardproject(props) {
  return (
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='200'
            image={props.pic}
            alt='exercise tracking website'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' className={style.cardhead}>
              {props.head}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {props.explain}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            click
          </Button>
        </CardActions>
      </Card>
  );
}

export default Cardproject;
