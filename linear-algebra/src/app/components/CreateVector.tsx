import React, { useState } from 'react';

interface CreateVectorProps {
    dimension: number;
}

const CreateVector: React.FC<CreateVectorProps> = ({ dimension }) => {
    const [vector, setVector] = useState(new Array(dimension).fill(0));
    return (
    <>
    <h1>CreateVector {dimension}</h1>
    {vector.map(num => <li>{num}</li>)}
    </>)
}

export default CreateVector;