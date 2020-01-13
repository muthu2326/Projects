import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css';
import { ListGroup, ListGroupItemHeading, Container, Row, Col } from 'reactstrap';

class ListAuthor extends React.Component{
    constructor(){
        super()
        this.state = { 
            authors : []
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => this.setState(() => ({ authors : response.data })))
    }
    render(){
        return(
            <div className="listcolor">
            <Container>
                <Row>
                <Col xs="6" sm="4"></Col>
                <Col xs="6" sm="4">
                <h2 align='center'>Listing Authors : {this.state.authors.length}</h2>
                <ul key={this.state.authors.id}>
                    {
                        this.state.authors.map(author => {
                            return(
                                <div> 
                                    <ListGroup>
                                        <ListGroupItemHeading><Link to={`/author/${author.id}`}  className="list-Author">{author.name}</Link></ListGroupItemHeading>
                                    </ListGroup>
                                </div>
                            )
                        })
                    }
                </ul>
                </Col>
                <Col sm="4"></Col>
                </Row>
            </Container>
            </div>
        )
    }
} 

export default ListAuthor
