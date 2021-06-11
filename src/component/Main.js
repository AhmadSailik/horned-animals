import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json';
import { CardColumns,Form } from 'react-bootstrap/'

class Main extends React.Component {


    selectionNumer=(event)=>{
        let numberOfSelect=parseInt(event.target.value);
        let arrOfFilter=rawData;
        if(numberOfSelect){
        arrOfFilter=arrOfFilter.filter((val)=>val.horns===numberOfSelect);
        }
        this.props.filterData(arrOfFilter);
    }
    render() {

        return (


            <div>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>How Many Horned?</Form.Label>
                        <Form.Control as="select" custom name='select' onChange={this.selectionNumer}>
                            <option value='""'>ALL</option>
                            <option value='1'>ONE</option>
                            <option value='2'>TWO</option>
                            <option value='3'>THREE</option>
                            <option value='100'>WOW...</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

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