import React from 'react'
import '../../index.css'
import {Row, Col} from 'react-bootstrap';

function Events() {
  return (
    <>
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div class="container py-5">
                <Row className="text-center">
                    <Col className="py-5">
                        <h1 className="fs-1 fw-bold" style={{color:'red'}}>Events</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Events