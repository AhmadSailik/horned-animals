import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json';
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
                {rawData.map((item,idx)=>{
                    return(
                        <HornedBeast 
                        hornTitle={item.title}
                        hornDescription={item.description}
                        hornImage={item.image_url}
                        />
 
                    )
                })}
                

            </div>
        )
    }
}
export default Main;