import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaPlayeras, DatosTablaPlayeras } from '../data/DatosPlayeras';
class Playeras extends React.Component {
  constructor(props) {
    super(props); this.state = {
      imagen: '',
      playerp: '',
      marcap: '',
      modelop: '',
      colorp: '',
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      playerap: item.playera,
      marcap: item.marca,
      modelop: item.modelo,
      colorp: item.color,
    });
  }
  
  render() {
    
    return (
      <div className="main-site">
        <h1>Playeras</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaPlayeras.id}</th>
                    <th>{TitulosTablaPlayeras.field1}</th>
                    <th>{TitulosTablaPlayeras.field2}</th>
                    <th>{TitulosTablaPlayeras.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaPlayeras.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.playera}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col><Col lg={2} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.playerap}
                    <p />
                    {this.state.marcap}
                  </Card.Title>
                  <Card.Text>
                    {this.state.modelop}
                    <p />
                    {this.state.colorp}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default Playeras;