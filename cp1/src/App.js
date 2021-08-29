import './App.css';
import React, { Component } from "react";
import author from './img/author.png';
import log from './img/logo.svg';

function App() {
  return (
    <div className="App">
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

          <div className = "container--sm">
          <div className = "site_content">
            <div className="row"></div>
              <main class="posts col_list">
                <header className = "post_header">
                    <h1 className = "post_title">
                      Quais os sintomas da variante Delta da Covid-19? Teste seus conhecimentos
                    </h1>
                    <hr className="hr"></hr>
                    <p className = "post_excerpt">
                      A infecção causada pela variante Delta pode provocar sintomas doferentes da doença causada pela linhagem original do novo coronavírus.
                    </p>

                  <section className = "author_content">
                    <figure className="author_image">
                      <img className= "img"src={author}/>
                    </figure>
                  </section>  
                  <div className = "higher_share">
                    <span className = "post_data">
                      24/08/2021 às 16:44 / Atualizado às 16:56
                    </span>
                  </div>
                </header>

                <div className = "post_content">
                  <div className = "riddle-target-initialised">
                  <img className= "custom-logo" src={log}/>
                  <br/><br/><br/>
                  <p>Por ser uma doença nova, a <a href=''>Covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, 
                  incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                  <br/>
                  <p>A <a href=''>variante Delta da Covid-19</a>, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimosmeses tornou-se rapidamente em muitos países. 
                  Ainda não está claro o quanto essa cepa é mais transmíssivel. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
                  </div>
                </div>
              </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
