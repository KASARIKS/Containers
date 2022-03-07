import React from 'react'
import Container from './Container/Container'
import classes from './ContainerList.module.css'


// container list
const ContainerList = ({ conts }) => {
    

    return (
        <div className={classes.list}>
            {conts.map(element => 
                <Container key={element.id}/>
            )}

            
        </div>
    )
}

export default ContainerList