import React from 'react';
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
                <h2>{this.props.hornTitle}</h2>
                <p>{this.props.hornDescription}</p>
                <img src={this.props.hornImage} onClick={this.numberOfClickFuc} />
                <p>numberOfClick:{this.state.numberOfClick}</p>

            </div>
        )
    }
}
export default HornedBeast;