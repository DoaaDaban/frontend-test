import React from 'react';


class UpdateForm extends React.Component{


    render(){


        return(
            <>

            
    <form onSubmit={e=> this.props.updateDigimonData(e)}>
      <label> Name</label>
      <input type='text' value={this.props.nameDigimon} onChange={this.props.changeName}></input>

      <label> image</label>
      <input type='text' value={this.props.imgDigimon} onChange={this.props.changeImage}></input>

      <label> level</label>
      <input type='text' value={this.props.levelDigimon} onChange={this.props.changeLevel}></input>

      <input type='submit' value='Update'/>
    </form>
            </>

        )
    }
}

export default UpdateForm;