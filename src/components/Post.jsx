import React from "react";
import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";


const Post = ()=>{
    return(
        <Card sx={{margin:5}} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgColor: "red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert/>
            </IconButton>
          }
          title="Stacy D'enovo"
          subheader="July 03, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          src="assets/afro.jpg"
          alt="Bahamas beach"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            Ever since i joined Happy i've learnt to value the little things that happen to me, i'm grateful to friends and acquintances who helped me get over difficult times as i was battling with anxiety🙏.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favourites">
            <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}} />}/>
          </IconButton>
          <IconButton aria-label="share" >
            <Share />
          </IconButton>
        </CardActions>
        <CardContent>
        </CardContent>
      </Card>
        
    )
}

export default Post;