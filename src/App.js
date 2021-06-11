import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer'
import SelectedBeast from './component/SelectedBeast'
import rawData from './component/data.json';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallry: rawData,
      show:false,
      selectBeast: {},
      
    }
  };
  openModal=(honerTitle)=>{

    this.setState({
        show:true,
        selectBeast:rawData.find(val=>val.title===honerTitle),
    })
};
closeModal=()=>{
this.setState({
    show:false
})
};


  render() {
    return (
      <div>
        <Header />
        <Main
          data={this.state.gallry}
          openit={this.openModal}
        />
        <Footer />
        <SelectedBeast
          stateOfModal={this.state.show}
          closit={this.closeModal}
          titleModal={this.state.selectBeast.title}
          imageModal={this.state.selectBeast.image_url}
          descriptionModal={this.state.selectBeast.description}
        />

      </div>
    )
  };
};
export default App;
