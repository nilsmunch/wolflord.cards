import {Component} from "react";

export class CardInfo extends Component<{ card: any }> {
    render() {
        let {card} = this.props;

        return (
            <>
                <h1>{card.title}</h1>
                <h3>{card.faction} {card.type}</h3>

                <h3>Mechanics:</h3>
                <div dangerouslySetInnerHTML={{ __html: card.cardtext }} />

                {card.background != '' &&
                    <><h3>Backstory:</h3><div dangerouslySetInnerHTML={{ __html: card.background }} /></>
        }
            </>
        );
    }
}
