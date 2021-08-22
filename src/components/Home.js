import React from 'react';
import axios from 'axios';

// import MyFavoriteDigemon from './components/MyFavoriteDigemon';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Home extends React.Component{

    constructor(props){
        super(props);
     
        this.state={
          server:process.env. REACT_APP_SERVER,
          digimon:[],
          cardShow:false,
     
        }
       }
     
       componentDidMount = async()=>{
     
         const getDigimon = await axios.get(`${this.state.server}/getData`);
          this.setState({
            digimon: getDigimon.data,
            cardShow:true,
     
          })
     
         // console.log('from Frontend:', this.state.digimon);
       }

       // add fav digimon to database
       addFavoriteDigimon = async (digimons)=>{
           console.log('test');
           const sentData= await axios.post(`${this.state.server}/postData`, digimons);
       }

    render(){

        return(
            <>
             <h1>Welcome to the website</h1>
  { this.state.cardShow && this.state.digimon.map((digimon,idx)=>{
    return(
        <>

             <Card> 
                 <Card.Title>{digimon.name}</Card.Title>
                 <img src={digimon.img} style={{width:'20rem', height:'20rem'}}/> 
                 <Card.Body> level : {digimon.level}</Card.Body>

                 <Button onClick={()=> {this.addFavoriteDigimon(digimon)}}>ADD TO FAV</Button>
             </Card>
        </>
    )
})}
                     
            </>
        )
    }
}

export default Home;



  