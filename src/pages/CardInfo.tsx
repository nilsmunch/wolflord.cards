import {Component} from "react";

export class CardInfo extends Component<{ card: any }> {
    render() {
        let {card} = this.props;

        return (
            <>
                Card info {card.title}
            </>
        );
    }
}
