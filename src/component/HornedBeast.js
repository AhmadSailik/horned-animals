import React from 'react';
class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.hornTitle}</h2>
                <p>{this.props.hornDescription}</p>
                <img src={this.props.hornImage} />
            </div>
        )
    }
}
export default HornedBeast;