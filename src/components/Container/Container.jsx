import React from 'react'
import classes from './Container.module.css'
import Block from './Block/Block'

// container
const Container = () => {
  const [block_idd, setBlockId] = React.useState(1) // block counter
  const [blocks, setBlocks] = React.useState([{block_id: block_idd}]) // array with blocks id


  // adding blocks to container
  function addBlock() {
    if (block_idd != 4) {
      setBlockId(block_idd + 1)
      setBlocks([...blocks, { block_id: block_idd }])
      console.log(blocks)
    }
  }

  return (
    <div>
      <div className={classes.cont}>
        {blocks.map(el => <Block key={el.id} />)}
      </div>
      <button onClick={addBlock}>App</button>
    </div>
  )
}

export default Container