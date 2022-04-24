import React from 'react';
import axios from 'axios';
import GridCards from './Components/GridCards/GridCards';
import Cards from './Components/Cards/Cards';


export default class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:1337/api/noticias`)
      .then(res => {
        console.log(res.data.data);
        const data = res.data.data;
        this.setState({ data });
      })
  }

  render() {

    return (
      <div className="App">
        <h1 className='tituloCentral'>Notícias</h1>
        <GridCards>
          {this.state.data.map(data =>
            <Cards key={data.id} title={data.attributes.Title} content={data.attributes.Content} link={data.attributes.Link} linkName={data.attributes.LinkName}/>
          )}
        </GridCards>
      </div>
    );
  }
}

