import React from "react"

import Card from './Card.js';




const Cardlist =(props)=> (
        <div>
            {props.profiles.map(profile => <Card {...profile}/>)}
            
        </div>
    )

export default Cardlist;