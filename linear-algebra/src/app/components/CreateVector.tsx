interface CreateVectorProps {
    demension: number;
}

const CreateVector: React.FC<CreateVectorProps> = ({ demension }) => {
    return (<><h1>CreateVector {demension}</h1></>)
}

export default CreateVector;