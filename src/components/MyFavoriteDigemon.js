import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteDigemon.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';

class MyFavoriteDigemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      server: process.env.REACT_APP_SERVER,
      digimon: [],
      showModalFav: false,
      nameDigimon: '',
      levelDigimon: '',
      imgDigimon: '',
      index: 0,
      shownForm: false,
    }
  }

  // get fav data from database
  componentDidMount = async () => {
    const digimonData = await axios.get(`${this.state.server}/getFavData`);

    this.setState({
      digimon: digimonData.data,
      showModalFav: true,
    })
    console.log(this.state.digimon);
  }

  // delete
  deleteDigimon = async (idx) => {
    const id = this.state.digimon[idx]._id;
    const digimonDelete = await axios.delete(`${this.state.server}/deleteData/${id}`)
    this.setState({
      digimon: digimonDelete.data,

    })
  }

  // update
  updateDigimon = async (idx) => {
    const chosenDigimon = this.state.digimon[idx];

    this.setState({
      index: idx,
      nameDigimon: chosenDigimon.name,
      imgDigimon: chosenDigimon.img,
      levelDigimon: chosenDigimon.level,
      shownForm: true,

    })
  }

  changeName = e => this.setState({ nameDigimon: e.target.value });
  changeImage = e => this.setState({ imgDigimon: e.target.value });
  changeLevel = e => this.setState({ levelDigimon: e.target.value });

  updateDigimonData = async (e) => {
    e.preventDefault();

    const id = this.state.digimon[this.state.index]._id;
    const holeOfupdate = {
      nameDigimon: this.state.nameDigimon,
      imgDigimon: this.state.imgDigimon,
      levelDigimon: this.state.levelDigimon,
    }
    const finalData = await axios.put(`${this.state.server}/updateData/${id}`, holeOfupdate);

    this.setState({
      digimon: finalData.data,
    })
  }


  render() {
    return (
      <Jumbotron>
        <h1>Digemon</h1>
        <p>
          This is a collection of my favorite Digemons
        </p>

        <>
          {
            this.state.shownForm &&
            <UpdateForm
              nameDigimon={this.state.nameDigimon}
              imgDigimon={this.state.imgDigimon}
              levelDigimon={this.state.levelDigimon}

              changeName={this.changeName}
              changeImage={this.changeImage}
              levelDigimon={this.changeLevel}

              updateDigimonData={this.updateDigimonData}

            />
          }


          {this.state.showModalFav && this.state.digimon.map((digimon, idx) => {
            return (
              <>
                <Card>
                  <Card.Title>{digimon.name}</Card.Title>
                  <img src={digimon.img} style={{ width: '20rem', height: '20rem' }} />
                  <Card.Body> level : {digimon.level}</Card.Body>
                  <Button onClick={() => this.deleteDigimon(idx)}>Delete</Button>
                  <Button onClick={() => this.updateDigimon(idx)}>Update</Button>

                </Card>
              </>
            )
          })}

        </>
      </Jumbotron>
    )
  }
}

export default MyFavoriteDigemon;
