import React, { Component } from "react";
import { MouseEvent } from "react";
import imageApi, { Image } from "./../logic/image/image-api";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




type Props = {};

type State = {
  searchInput: string;
  imgs?: Image[];
  
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
    }
  }),
);


class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      imgs: undefined,
      searchInput: "",
      
    };
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.currentTarget.value });
  };

  onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    imageApi
      .fetchImages(this.state.searchInput)
      //.then(data => this.setState({imgstotal: data.imgstotal}))
      .then(res => {
        this.setState({ imgs: res });
      })
      .catch(error => console.log("error", error));
  };

 
  render() {
    return (
      <div className="home">
        <h1>Search for image</h1>
        <input type="search" value={this.state.searchInput} onChange={this.onChange}/>
        <Button onClick={this.onSubmit} value="submit"  color="secondary" variant="contained" >
          Search
        </Button>
        <div className="listimage">

        
        {/* <div className="listimage">
          {this.state.imgs ? (
            <ul>
              {this.state.imgs.map((img, i) => (
                <li key={i}>
                  <img src={img.urls.small} alt={img.description} />;
                </li>
              ))}
            </ul>
          ) : null}
        </div> */}
        {this.state.imgs ? (
        <Grid container spacing={4} direction="row" justify="flex-start" alignItems="baseline">
            
                  {this.state.imgs.map((img,i) => (
                    <Grid item xs>
                      <img src={img.urls.small} alt={img.description} />
                    </Grid>
                  ))}
                </Grid>
            ):null}

        </div>
      </div>
    );
  }
}

export default Home;
