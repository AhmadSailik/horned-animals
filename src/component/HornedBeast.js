import React from 'react';
import SelectedBeast from './SelectedBeast'
import {Card} from 'react-bootstrap/'

class HornedBeast extends React.Component{

constructor(pops){
    super(pops);
    this.state={
        numberOfClick:0,
        show:false,
        title:this.props.hornTitle,
        image:this.props.hornImage,
        description:this.props.hornDescription,
    }
}
numberOfClickFuc=()=>{
    this.setState({
        numberOfClick:this.state.numberOfClick+1
    })

}
openModal=()=>{
    this.setState({
        show:true
    })
}
closeModal=()=>{
this.setState({
    show:false
})
}

    render(){
        return(
            <div>
                {/* <h2>{this.props.hornTitle}</h2>
                <p>{this.props.hornDescription}</p>
                <img src={this.props.hornImage} onClick={this.numberOfClickFuc} />
                <p>numberOfClick:{this.state.numberOfClick}</p> */}

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.state.image} onClick={this.numberOfClickFuc}alt={this.state.title} />
                    <Card.Body onClick={this.openModal}>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>
                        <Card.Text>❤️:{this.state.numberOfClick}</Card.Text>
                    </Card.Body>
                </Card>
                <SelectedBeast
                openit={this.state.show}
                closit={this.closeModal}
                titleModal={this.state.title}
                imageModal={this.state.image}
                descriptionModal={this.state.description}
                
                />
            </div>
        )
    }
}
export default HornedBeast;
