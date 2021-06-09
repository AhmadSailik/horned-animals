import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json';
import { CardColumns, Form } from 'react-bootstrap/'
import { waitForElement } from '@testing-library/dom';
import { wait } from '@testing-library/dom';
import { waitFor } from '@testing-library/dom';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallry: rawData,
            select: '...',
        }
    }
    selectionNumer = (event) => {
        this.setState({
            select: event.target.value
        })

    }
    

    render() {
        // const key = "horns";
        // const value = this.state.select;
        // const result = rawData.filter(d => d[key] == value);
        let result=rawData.filter((val)=>val.horns==this.state.select)
        console.log(result);

        
        return (
            
        <div>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>How Many Horned?</Form.Label>
                    <Form.Control as="select" custom name='select' onChange={this.selectionNumer}>
                        <option value='...'>ALL</option>
                        <option value='1'>ONE</option>
                        <option value='2'>TWO</option>
                        <option value='3'>THREE</option>
                        <option value='100'>WOW...</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <CardColumns>

                {result.map((item, idx) => {
                    return (
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