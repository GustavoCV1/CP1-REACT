import React from 'react';
import log from './img/logo.svg';


class Text extends React.Component {
    render() {
        return (
            <div className = "container--sm">
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
            </div>
        );
    }
}

export default Text;
