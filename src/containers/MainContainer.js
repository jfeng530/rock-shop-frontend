import React, { Component } from 'react';
import { CartContainer, DetailContainer, EditUserContainer, IndexContainer, LogInContainer, AccountContainer } from "./sub-containers";
import Home from '../components/Home'
import { Route, Switch, Link, NavLink } from 'react-router-dom'


export class MainContainer extends Component {

    // indexContainerWithProps = () => {
    //     return <IndexContainer allRocks={this.props.allRocks} />
    // }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/rocks" >
                        {/* {this.indexContainerWithProps} */}
                        <IndexContainer allRocks={this.props.allRocks} />
                    </Route>

                    <Route path="/rocks/:id" render={ this.renderRock } />

                    <Route path="/cart" >
                        <CartContainer currentCart={this.props.currentCart}/>
                    </Route>

                    <Route path="/login" component={ LogInContainer } />

                    <Route exact path="/:user" component={ AccountContainer } />

                    <Route exact path="/:user/edit" component={ EditUserContainer } />

                    <Route exact path="/" component={ Home } />
                </Switch>
            </div>
        )
    }

    renderRock = (renderParams) => {
        console.log(renderParams)
        const id = parseInt(renderParams.match.params.id)
        // this will render a rock
        const theRock = this.props.allRocks.find(rock => rock.id === id)
        return <DetailContainer rock={ theRock } />
    }
}

export default MainContainer;
