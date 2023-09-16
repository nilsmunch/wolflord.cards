import Carddata from "../cards/carddata";
import cardData from "../cards/carddata";
import {Link} from "react-router-dom";

export function Front() {
    const sortedCardData = cardData.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
            Hello and welcome to the cards.
            <div className="row">
            {sortedCardData.map((card) => (
                <div className="col-md-3">
                    <div key={card.url} className={card.faction}>
                    <Link to={card.url}>{card.title}</Link>
                </div></div>

            ))}
            </div>
        </>
    );
}
