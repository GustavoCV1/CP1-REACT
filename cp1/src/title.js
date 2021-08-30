import React from 'react';
import author from './img/author.png';


class Title extends React.Component {
    render() {
        return (
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
                  <br/><br/> 
                  <hr className="hr"></hr> 
                  <div className = "higher_share">
                    <span className = "post_data">
                      24/08/2021 às 16:44 / Atualizado às 16:56
                    </span>
                  </div>
                </header>
            </main>
            </div>
            </div>
            
        );
    }
}

export default Title;