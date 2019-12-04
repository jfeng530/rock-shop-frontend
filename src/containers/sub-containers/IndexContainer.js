import React from 'react';
import RockCard from '../../components/RockCard'
import { Card, CardDeck } from 'react-bootstrap'

class IndexContainer extends React.Component {
    
    render(){
        
        const displayRocks = this.props.displayRocks.map(rock => <RockCard key={rock.id} rock={rock} />)

        return (
            <>
            <CardDeck>
                {displayRocks}
            </CardDeck>
            </>
        )
    }
}

export default IndexContainer
