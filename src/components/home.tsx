import React, { Component, Dispatch } from 'react';
import { MouseEvent } from 'react'; 
import imageApi from './../logic/image/image-api';

type Props = {}

type State = { value:string, imgs: {}}
class Home extends Component<Props,State>{

    constructor(props: Props){
        super(props);
            this.state = {
               imgs: '',
               value:''
            
            
        };
    }

    
        onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.setState({value: event.currentTarget.value});
        }
        onSubmit = (event:MouseEvent<HTMLButtonElement>)=> {
           event.preventDefault();
           imageApi.fetchImages()
            .then((imgs) )
            
        }

        



    render(){

        return(
            <div className="home">
            <h1>Search for image</h1>
                <input type="search" value={this.state.value} onChange={this.onChange}></input>
                <button onClick={this.onSubmit} value="submit">Search</button>
            <div className="listimage">
            <ul>
                <li></li>
            </ul>
            </div>
            
            </div>
    
        );
    }
       
}
 

export default Home