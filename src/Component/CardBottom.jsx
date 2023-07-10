import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import video from "../images/videos.png";


const CardBottom = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Card style = {{margin : "5px"}}>
            <Card.Img variant="top" src={video} />
            <Card.Body>
              <Card.Title>1. Choose your Object</Card.Title>
              <Card.Text>
              With maximum of 6 students per Batch
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card style = {{margin : "5px"}}>
            <Card.Img variant="top" src={video} />
            <Card.Body>
              <Card.Title>2. Select your Chapter</Card.Title>
              <Card.Text>
              With maximum of 6 students per Batch
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card style = {{margin : "5px"}}>
            <Card.Img variant="top" src={video} />
            <Card.Body>
              <Card.Title>3. Select your topic/whole you want to read</Card.Title>
              <Card.Text>
              With maximum of 6 students per Batch
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card style = {{margin : "5px"}}>
            <Card.Img variant="top" src={video} />
            <Card.Body>
              <Card.Title>4. Study with the best teacher with bilingual explanation.</Card.Title>
              <Card.Text>
              With maximum of 6 students per Batch
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card style = {{margin : "5px"}}>
            <Card.Img variant="top" src={video} />
            <Card.Body>
              <Card.Title>5. Whenever you have query, click on the help button.</Card.Title>
              <Card.Text>
              With maximum of 6 students per Batch
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default CardBottom
