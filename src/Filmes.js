import React, { Component } from 'react';

export default class LivroBox extends Component {
    
    render() {
        return(
            <div>
                <div className="header">
                    <h1>Buscador de Filmes</h1>
                </div>
                <div className="content">
                    <h2>Busque seu filme preferido</h2>
                    <form className="pure-form">
                        <input className="pure-input-rounded" type="text"/>
                        <button className="pure-button pure-button-primary" type="submit">Buscar</button>
                    </form>
                    <div className="pure-g">
                        <div className="pure-u-1-3"><img src="" alt=""/></div>
                    </div>
                </div>
            </div>
        );
    }
}