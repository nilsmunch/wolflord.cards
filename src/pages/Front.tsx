import Carddata from "../cards/carddata";
import cardData from "../cards/carddata";
import {Link} from "react-router-dom";

export function Front() {
    const sortedCardData = cardData.sort((a, b) => {
        const comparisonA = `${a.faction} ${a.type}`;
        const comparisonB = `${b.faction} ${b.type}`;
        return comparisonA.localeCompare(comparisonB);
    });

    const groupedCardData: { [key: string]: typeof cardData } = {};
    sortedCardData.forEach(card => {
        const key = `${card.faction} ${card.type}`;
        if (!groupedCardData[key]) {
            groupedCardData[key] = [];
        }
        groupedCardData[key].push(card);
    });

    return (
        <>
            Here are the current cards, sorted by faction and type:
            <div className="row">
                {Object.entries(groupedCardData).map(([key, cards]) => (
                    <div key={key}>
                        <h2>{key}:</h2>
                        <div className="row">
                        {cards.map(card => (
                            <div className="col-sm-3">
                                <div key={card.url} className={card.faction}>
                                    <Link className="role" to={card.url}>{card.title}</Link>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
