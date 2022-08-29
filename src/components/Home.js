import React from 'react';
import { Container ,Button } from 'reactstrap';
//import { Jumbotron } from 'react-bootstrap/Jumbotron';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = ()=>{
    return (
    <div>
        <Jumbotron className='text-center bg-Light'>
            <h1>Skills up yourself</h1>
            <p>We hope you are able to find the best course here that you are looking for</p>
            <Container>
                <Button color="primary">
                    Start Using
                </Button>
            </Container>
        </Jumbotron>
    </div>);
};

export default Home;