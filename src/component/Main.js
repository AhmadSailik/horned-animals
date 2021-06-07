import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gallry:rawData
        }
    }
    render(){
        return(
            <div>
                <CardColumns>
                {rawData.map((item,idx)=>{
                    return(
                        <HornedBeast 
                        hornTitle={item.title}
                        hornDescription={item.description}
                        hornImage={item.image_url}
                        />
 
                    )
                })}
                
                </CardColumns>
            </div>
        )
    }
}
export default Main;