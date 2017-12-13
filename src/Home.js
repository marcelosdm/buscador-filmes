import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Bem vindo ao Buscador de Filmes</h1>
                </div>
                <div className="content">
                    <h2>Busque seu filme preferido</h2>
                    <form className="pure-form">
                        <input className="pure-input-rounded" type="text"/>
                        <button className="pure-button pure-button-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        );
    }
}