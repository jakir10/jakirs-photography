import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Thanks for hiring me</h2>
            <div className='container w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="number" placeholder="Contact number" />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;