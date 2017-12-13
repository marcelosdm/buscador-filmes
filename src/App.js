import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import FilmeBox from './Filmes';

class App extends Component {
    
    constructor() {
        super();
        this.state = {lista: []}
    }

    componentDidMount() {
        $.ajax({
            url: 'https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman',
            dataType: 'json',
            success: function(resposta) {
                this.setState({lista:resposta});
            }.bind(this),
            error: function(erro){
                console.log(erro);
            }
        })
    }

    render() {
    return (
        <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link"></a>
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company
                <span></span>
                </a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sobre</a></li>

                    <li className="pure-menu-item menu-item-divided pure-menu-selected">
                        <a href="#" className="pure-menu-link">Filmes</a>
                    </li>

                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contato</a></li>
                </ul>
            </div>
        </div>
        <div id="main">
            <FilmeBox />
        </div>
        </div>
);
  }
}

export default App;
