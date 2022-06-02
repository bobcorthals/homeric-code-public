import React, { useState } from 'react';
import books from '../../files/book_lines_iliad.json';
import lines from '../../files/book_lines_iliad_chunks.json';
import TextCard from "../textcard/textCard"

import { Container, SubNav, NavMenu, MenuItems, NavMenuLine, MenuItemsLines } from "./SubnavbarElements";

const SubNavbar = () => {

  // on first render, set to '1' (book 1), afterwards toggle based on id match (N.B. .toString())
  const [active, setActive] = useState('1')
  const [active2, setActive2] = useState('1.1')
  const [stateText, setStateText ] = useState(
    { start: "1.1", end: "32" }
  )

  const handleClick = (book) => {

    if (active !== book.target.id.toString()) {
      setActive(book.target.id.toString())
      setActive2(`${book.target.id}.1`)

      setStateText(prevState => {
        return {...prevState, start: `${book.target.id}.1`, end: lines.lines[book.target.id][1]-1}
      });
    }

  }

  const handleClick2 = (book) => {
    if (active2 !== book.target.id.split('-')[0]) {
      setActive2(book.target.id.split('-')[0])
      
      setStateText(prevState => {
        return {...prevState, start: `${book.target.id}`, end: book.target.id.split('-')[1]}
      });
    }
  }

  const last_line = books.lines[active]

  return (
    <>
      <Container>
        <SubNav>
          <div style={{textAlign: 'right', width: '80px', padding: "0 1rem"}}>Book</div>
          <NavMenu>
            {Object.keys(books.lines).map((book, index) => {
              return <MenuItems className={`${book % 2 === 0? "even":"odd"} ${active === book? "active":""}`} items={book} key={index} 
              onClick={(book) => handleClick(book)}
              />;
            })}
          </NavMenu>
        </SubNav>
        <SubNav style={{paddingTop: "0" }}>
          <div style={{textAlign: 'right', width: '80px', padding: "0 1rem"}}>Line</div>
          <NavMenuLine>
            {
              lines.lines[active].map((item, index) => {
                if (index === lines.lines[active].length-1) {
                  return (
                  <MenuItemsLines className={`${index % 2 === 1? "even":"odd"} ${active2 === `${active}.${item}`? "active":""}`} items={`${active}.${item}-${last_line}`} key={index} 
                  onClick={(item) => handleClick2(item)}/>
                  )
                } else {
                  return (
                  <MenuItemsLines className={`${index % 2 === 1? "even":"odd"} ${active2 === `${active}.${item}`? "active":""}`} items={`${active}.${item}-${lines.lines[active][index+1]-1}`} key={index} 
                  onClick={(item) => handleClick2(item)}/>
                  )
                }
              })
            }
          </NavMenuLine>
        </SubNav>
      </Container>
      <TextCard props={ stateText } />
    </>
  )
}
 
export default SubNavbar;