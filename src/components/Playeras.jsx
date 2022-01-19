import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaPlayeras, DatosTablaPlayeras } from '../data/DatosPlayeras';
class Playeras extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const a = () => {
      var e = 2;
        alert(<Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaPlayeras[e].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaPlayeras[e].marca} {DatosTablaPlayeras[e].modelo}
                  </Card.Title>
                  <Card.Text>
                    Playera: {DatosTablaPlayeras[e].playera}
                    <p />
                    {DatosTablaPlayeras[e].descripción}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>);
    }
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
                      <tr onClick={a}>
                        <td>{item.playera}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default Playeras;