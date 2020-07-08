import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function IncreaseFont() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(10);

    return (
        <Container>
            <p onKeyDown={() => setCount(count + 1)} style={{ fontsize: { count } }}>Wow! You clicked {count} times</p>
        </Container >
    );
}

export default IncreaseFont;