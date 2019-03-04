import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";

class OneSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      const oneSmurf = res.data.filter(s => s.id === parseInt(this.props.match.params.id, 10))[0];
      this.setState({
        name: oneSmurf.name,
        age: oneSmurf.age,
        height: oneSmurf.height
      });
    })
    .catch(err => {
      console.log('There was an error in getSmurfs:', err);
    });
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
        {/* <button onClick={() => props.deleteSmurf(props.id)}>Banish smurf from village</button> */}
      </div>
    );
  }
  
}

export default withRouter(OneSmurf);