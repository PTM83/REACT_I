import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, title, textCard ,colorButton, textButton}) => {

    return (
        <>
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={image}/>

                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text>
                        {textCard}
                    </Card.Text>
                    <Tags colorTags={colorButton} textTags={textButton}/>
                </Card.Body>
            </Card>
        </>
    );
    };

export default MyCard;