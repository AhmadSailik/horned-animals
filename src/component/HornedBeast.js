import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component{

constructor(pops){
    super(pops);
    this.state={
        numberOfClick:0
    }
}
numberOfClickFuc=()=>{
    this.setState({
        numberOfClick:this.state.numberOfClick+1
    })
}

    render(){
        return(
            <div>
                {/* <h2>{this.props.hornTitle}</h2>
                <p>{this.props.hornDescription}</p>
                <img src={this.props.hornImage} onClick={this.numberOfClickFuc} />
                <p>numberOfClick:{this.state.numberOfClick}</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.hornImage} onClick={this.numberOfClickFuc}/>
                    <Card.Body>
                        <Card.Title>{this.props.hornTitle}</Card.Title>
                        <Card.Text>
                        {this.props.hornDescription}
                        </Card.Text>
                        <Card.Text>❤️:{this.state.numberOfClick}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default HornedBeast;