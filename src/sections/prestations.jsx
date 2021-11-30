import React from 'react';
import Markdown from 'markdown-to-jsx'

class Prestations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: this.props.content.title,
        description: this.props.content.description,
        image: this.props.content.image,
        cards: this.props.content.card
      };
    }

    render() {
        console.log(this.state.content)

      return (
          <>
            <div className="prestations">
              <div className="container">
                    <div className="image">
                        <img src={this.state.image.url} />
                    </div>
                    <div className="txt-content">
                        <h2 className="title">{this.state.title}</h2>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{this.state.description}</Markdown>
                        <div className="prestas">
                            {this.state.cards.map((card) =>
                                <div key={card.id} className="presta">
                                <div className="icon">
                                    <img src={card.icon.url} />
                                </div>
                                <div className="txt">
                                    <h3 className="title">{card.title}</h3>
                                    {/* {this.state.desscription && <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{card.description}</Markdown>} */}
                                    {/* <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{card.description}</Markdown> */}
                                </div>
                                </div>
                            )}
                        </div>
                    </div>
                
              </div>
            </div>
            <h2 className="title-actu">Actualité</h2>
          </>
        )
    }
}

export default Prestations
