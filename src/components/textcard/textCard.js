import { Container, TextCardElem, AnnotationCardElem, Header, Text, TextAnn, Btn } from './textCardElements';
// HeaderAnn not used

import { useState } from 'react';
import TextBlock from './textBlock';

import textData from '../../files/text_iliad_ipsum.json';

// 
const TextCard = ( elem ) => {

  const myStart = elem.props.start
  const myEnd = elem.props.end

  const [ translation, setTranslation ] = useState(true)

  const showTranslation = () => {
    return (
    setTranslation(!translation)
    )
  }

  return (
    <Container>
      <TextCardElem>
        <Header>
          <h2>Hom. <i>Il.</i>&nbsp;{(myStart).includes('-')? myStart:`${myStart}-${myEnd}`}</h2>
          <Btn onClick={showTranslation}>Toggle translation</Btn>
        </Header>
        <Text>
          {/* start: "1.1", end: "10" */}
          <TextBlock props={ { data: textData, start: myStart, end: myEnd } } translation={translation} />
        </Text>
      </TextCardElem>
      <AnnotationCardElem>
        {/* <HeaderAnn>
          <h3>Notes column</h3>
        </HeaderAnn> */}
        <TextAnn>
          <p>Click highlighted elements in the text block to show notes</p>
          <p style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'red'}}>XX</p>
        </TextAnn>
      </AnnotationCardElem>
    </Container>
    )
}

export default TextCard;