import React, { Component } from 'react';
import { CartContainer, DetailContainer, EditUserContainer, IndexContainer, LogInContainer, AccountContainer } from "./sub-containers";
import Home from '../components/Home'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'


export class MainContainer extends Component {

    loginRender = () => {if (!!this.props.token){return <Redirect to="/rocks" />} else return <Redirect to="/login"/>}
    
    render() {
        console.log(this.props)
        return (
            <>
                
                <Switch>
                    <Route exact path="/rocks" >
                        <IndexContainer displayRocks={this.props.displayRocks} />
                    </Route>

                    <Route path="/rocks/:id" render={ this.renderRock } />

                    <Route path="/cart" >
                        <CartContainer currentCart={this.props.currentCart}/>
                    </Route>

                    <Route path="/login" >
                        {/* <LogInContainer setToken={this.props.setToken} /> */}
                        {!!this.props.token ? <Redirect to="/rocks"/> : <LogInContainer setToken={this.props.setToken} />}
                    </Route>

                    <Route exact path="/:user">
                        <AccountContainer token={this.props.token} loggedInUserId={this.props.loggedInUserId}/>    
                    </Route> 

                    <Route exact path="/:user/edit" component={ EditUserContainer } />

                    <Route exact path="/" component={ Home } />
                </Switch>
            </>
        )
    }

    renderRock = (renderParams) => {
        // console.log(renderParams)
        const id = parseInt(renderParams.match.params.id)
        // this will render a rock
        const theRock = this.props.allRocks.find(rock => rock.id === id)
        return <DetailContainer rock={ theRock } />
    }
}

export default MainContainer;
