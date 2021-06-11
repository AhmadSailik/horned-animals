import React from 'react';
import HornedBeast from './HornedBeast';

import { CardColumns } from 'react-bootstrap/'

class Main extends React.Component {
 
    

    render() {
      
        return (
            
        <div>
           
            <CardColumns>

                {this.props.data.map((item, idx) => {
                    return (
                        <HornedBeast
                            hornTitle={item.title}
                            hornDescription={item.description}
                            hornImage={item.image_url}
                            numberOfHoner={item.horns}
                            openitpass={this.props.openit}
                        />

                    )

                })}

            </CardColumns>
            
        </div>
        )
        
    }
    
}
export default Main;