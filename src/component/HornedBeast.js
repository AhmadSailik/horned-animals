import React from 'react';

import {Card} from 'react-bootstrap/'

class HornedBeast extends React.Component{

constructor(pops){
    super(pops);
    this.state={
        numberOfClick:0,
    }
}
numberOfClickFuc=()=>{
    this.setState({
        numberOfClick:this.state.numberOfClick+1
    })

}
returnTitle=()=>{
    this.props.openitpass(this.props.hornTitle)
}


    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.hornImage} onClick={this.numberOfClickFuc}alt={this.props.hornTitle} />
                    <Card.Body onClick={this.returnTitle}>
                        <Card.Title>{this.props.hornTitle}</Card.Title>
                        <Card.Text>
                        {this.props.hornDescription}
                        </Card.Text>
                        <Card.Text >
                            🐥 : {this.props.numberOfHoner} vots 
                        </Card.Text>
                        <Card.Text> 
                            ❤️ : {this.state.numberOfClick}
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;
