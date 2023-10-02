import Carddata from "../cards/carddata";
import cardData from "../cards/carddata";
import {Link} from "react-router-dom";

export function Alphabetical() {
    const sortedCardData = cardData.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
            Here are the current cards, sorted alphabetically:
            <div className="row">
                {sortedCardData.map((card) => (
                    <div className="col-sm-3">
                        <div key={card.url} className={card.faction}>
                            <Link className="role" to={card.url}>{card.title}</Link>
                        </div></div>

                ))}
            </div>
        </>
    );
}
