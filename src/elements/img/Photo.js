import React from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 const PhotoStyle = styled(CardImg)`
    width: 100%;
    height: 100%;
`

 const CardStyle = styled(Card)`
    width: 600px;
    height: 600px;
`

 const TextStyle = styled(CardText)`
    color: skyblue;
`

 const TitleStyle = styled(CardTitle)`
    color: red;
`

function Photo (props) {
    return (
      <div width='350px'>
        <CardStyle width='350px'>
          <PhotoStyle src={props.src} />
            <CardBody>
                <TitleStyle>{props.title}</TitleStyle>
                <TextStyle>{props.explanation}</TextStyle>
            </CardBody>
        </CardStyle>
      </div>
    );
}

export default Photo;