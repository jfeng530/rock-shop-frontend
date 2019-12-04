import React from 'react';
import RockCard from '../../components/RockCard'
import SideBar from "../../components/SideBar";
import { CardDeck } from 'react-bootstrap'

class IndexContainer extends React.Component {
    
    render(){
        
        const displayRocks = this.props.displayRocks.map(rock => <RockCard key={rock.id} rock={rock} />)

        return (
            <>
            <CardDeck>
            <SideBar filterRocksByCategory={this.props.filterRocksByCategory} />
                {displayRocks}
            </CardDeck>
            </>
        )
    }
}

export default IndexContainer
