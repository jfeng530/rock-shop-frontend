import React from 'react';
import RockCard from '../../components/RockCard'
import SideBar from "../../components/SideBar";
// import { CardDeck } from 'react-bootstrap'
    const style = {
        marginLeft: "140px",
        marginTop:"5%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: "Courier New, Monospace", 
        fontWeight: "100", 
        color: "#343a40", 
        textAlign: "center",
        justifyContent: "space-around"
      }

class IndexContainer extends React.Component {
    
    render(){
        
        const displayRocks = this.props.displayRocks.map(rock => <RockCard key={rock.id} rock={rock} />)

        return (
            <React.Fragment >
            {/* <CardDeck> */}
            <SideBar filterRocksByCategory={this.props.filterRocksByCategory} />
                <div style={style}>
                {displayRocks}
                </div>
            {/* </CardDeck> */}
            </React.Fragment>
        )
    }
}

export default IndexContainer
