import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const Services=()=>{
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles();
      return (
        <>
        
          <div className="container mt-5">
           <h2 style={{textAlign:'center',marginBottom:'50px',marginTop:'10%'}}>Our Services😍</h2> 
                <div className="row" >
                    <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/200/300"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>
        </div>
        <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/seed/picsum/200/300"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>

        </div>
        <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/200/300?grayscale"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>
        </div>  
            </div>
        </div>



        <div className="container mt-5"> 
                <div className="row" >
                    <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>
        </div>
        <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/200/300.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>

        </div>
        <div className="col-lg-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/200/300.webp"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Hafiz Umer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Share
            </Button></Link>
            <Link to="/about" className="text-decoration-none"><Button size="small" color="primary">
              Learn More
            </Button></Link>
          </CardActions>
        </Card>
        </div>  
            </div>
        </div>
        </>
      );
    }


export default Services;