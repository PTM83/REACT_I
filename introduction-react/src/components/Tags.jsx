import Badge from 'react-bootstrap/Badge'
import '../assets/cssComponents/TagsCss.css'

const Tags = ({colorTags, textTags}) => {
    return (
    <>
        <Badge className='TagsStyle' pill bg={colorTags}> {textTags} </Badge>
    </>
    );
};

export default Tags;
