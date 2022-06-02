import { Fragment } from 'react';
import { TextBlockGreek, Line, Greek, Translation, SpanSpace, SpanWord, SpanPunct } from './textCardElements';

const TextBlock = ( elem ) => {
  // receives: elem: { 
  //   props: { data: textData, start: "1.1", end: "1.10" },
  //   translation: true
  // }

  const data = elem.props.data
  const translation = elem.translation

  const splitString = (string, separator) => {
    const result = string.split(separator).map(item => {
      return parseInt(item)
    });
    return result
  }

  const [ book, start ] = splitString(elem.props.start, ".")
  const end = parseInt(elem.props.end)

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  let myKey = 0;

  let myArr = [];
  let myMap = [];
  let regex_pattern = new RegExp(/[^.,/#!$%^&*;:{}=\-_`~()·\s]+|[.,/#!$%^&*;:{}=\-_`~()·]+|\s+/g);
  // original: /[^.,\/#!$%\^&\*;:{}=\-_`~()\s]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+|\s+/g

  // let regex_word = new RegExp(/[^.,/#!$%^&*;:{}=\-_`~()·\s]+/g)
  let regex_space = new RegExp(/\s+/g);
  let regex_punct = new RegExp(/[.,/#!$%^&*;:{}=\-_`~()·]+/g);
  // original: /[.,\/#!$%\^&\*;:{}=\-_`~()]+/g

  for (let i = start; i < end+1; i++) {

    myKey = getKeyByValue(data.line, `${book}.${i}`)

    // words_pos like: "words_pos":{"0":"[1, 2, 3, 4, 5]"}, handle with JSON.parse("[1, 2, 3, 4, 5]")
    if (myKey !== undefined) {
      myArr.push({
        "line" : data.line[myKey],
        "greek" : data.unicode[myKey],
        "translation" : data.trans[myKey],
        "words" : JSON.parse(data.words_pos[myKey])
      })
    }
  }

  return (
    <>
      {myArr.map((item, index) => {

        myMap = item.greek.match(regex_pattern);
        let myWords = item.words;
        let count_words = -1;

        return ( 
          <Fragment key={`fragment-${index}`}>
            <TextBlockGreek key={`text-block-greek-${index}`}>
              <Line key={`line-${index}`}>
              {item.line}
              </Line>
              <Greek key={`greek-${index}`}>
              {myMap.map((item, index2) => {

                  if (item.match(regex_space)) {
                    return (
                      <SpanSpace key={`span-space-${index2}`}>
                        {item}
                      </SpanSpace>
                    )
                  } else if (item.match(regex_punct)) {
                    return (
                      <SpanPunct key={`span-punct-${index2}`}>
                        {item}
                      </SpanPunct>
                    )
                  } else {

                    count_words +=1
                    return (
                      <SpanWord key={`span-greek-${index2}`} id={myWords[count_words]}>
                        {item}
                      </SpanWord>
                    )
                  }
                }
              )
              }
              </Greek>
            </TextBlockGreek>
            <Translation className={translation? "show" : ""} key={`translation-${index}`}>
              {item.translation}
            </Translation>
          </Fragment>
        )
      })}
    </>
  )
}

export default TextBlock;