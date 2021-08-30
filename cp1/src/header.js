import React from 'react';


class Headers extends React.Component {
    render(){
        return(
            <div className = "container--sm">
                <header className = "header_group">
                <div className = "header_main">
                <nav className = "content_menu">
                    <ul id="menu-menu-header" class="menu">
                    <li><a class="nacional" href="">Nacional</a></li>
                    <li><a href="">Business</a></li>       
                    <li><a href="">Internacional</a></li>
                    <li><a href=""><b>Saúde</b></a></li>
                    <li><a href="">Tecnologia</a></li>
                    <li><a href="">Esporte</a></li>
                    <li><a href="">Entreterimento</a></li>
                    <li><a href="">Estilo</a></li>
                    <li><a href="">Viagem e Gastronomia</a></li>
                    <li><a href="">Newsletters</a></li>
                    <li><a href="">Podcasts</a></li>
                    </ul>
                </nav>
                </div>
                </header>
            </div>
        );
    }
}

export default Headers;
