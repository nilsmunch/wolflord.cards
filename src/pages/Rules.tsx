import Carddata from "../cards/carddata";
import cardData from "../cards/carddata";
import {Link} from "react-router-dom";

export function Rules() {

    return (
        <>

            <h3>Objective:</h3>
            <b>Wolflord</b> is a social deduction game where players are divided into three factions: Wolf (the informed minority), Town (the uninformed majority), and Chaos (both uninformed and a minority). The primary objective of the Wolf team is to eliminate the Town team, while the Town's objective is to find and eliminate all the hunting Wolves. The Chaos team has its own unique win conditions, adding an additional layer of unpredictability to the game.


            <h3>Teams:</h3>
            <ul className="nodot">
                <li><strong className="Wolf role">Wolf:</strong> The primary aggressors of the game. Their objective is to eliminate the Town team and attain voting majority.</li>
                <li><strong className="Town role">Town:</strong> The majority faction. Their objective is to eliminate all hunting members of the Wolf team.</li>
                <li><strong className="Chaos role">Chaos:</strong> A wildcard faction with unique objectives. They are uninformed and in the minority. Their goals can vary from ensuring specific players survive to achieving certain end-game states.</li>
            </ul>

            <h2>Setup:</h2>
            <ul className="nodot">
                <li>A designated player assumes the role of the Game Master (GM).</li>
                <li>The GM shuffles the role cards and deals one to each player. Players secretly view their role but do not reveal it to others.</li>
                <li>The number of Wolves, Town, and Chaos members depends on the total number of players and can be adjusted for game balance.</li>
            </ul>

            <h2>Gameplay:</h2>
            <p>The game is played in alternating Day and Night phases.</p>

            <h3>Day Phase:</h3>
            <ol>
                <li><strong>Debate:</strong> Players discuss and deliberate among themselves. They can share suspicions, form alliances, or spread misinformation. During this time, players can nominate other players for execution. Each player can nominate only once and cannot nominate themselves.</li>
                <li><strong>Defense:</strong> Once nominations are made, each nominated player is given a set amount of time (e.g., 1 minute) to defend themselves, stating why they should not be executed.</li>
                <li><strong>Vote:</strong> After the defenses, all living players vote on who to execute. Players can also choose not to vote or to abstain. The player with the most votes is selected for execution. If there's a tie, a single revote occurs between the tied players. If there's still a tie after the revote, no execution occurs for that day.</li>
                <li><strong>Execution:</strong> The player selected for execution is eliminated from the game, and their role card is revealed. This is the only time a role card is publicly shown.</li>
            </ol>

            <h3>Night Phase:</h3>
            <ul className="nodot">
                <li>All players "sleep" (close their eyes).</li>
                <li>The GM will call on certain roles (based on the role cards) to "wake up" and perform their night actions. Not all roles may have night actions.</li>
                <li>The Wolf team goes first, then the Town team, then the Chaos team.</li>
                <li>After all night actions are completed, the GM will announce the dawn of a new day.</li>
            </ul>

            <p><strong>End of Night Phase:</strong> The GM reveals if someone has been killed during the night but does not reveal their role card. Any other effects are announced afterwards.</p>

            <h2>Ending the Game:</h2>
            <ul className="nodot">
                <li className="nodot">
                    <strong className="Wolf role">Wolf Victory:</strong><br/>
                    If the day phase begins where the wolves have ABSOLUTE voting majority (including special effects, bonus votes ect) the game is won by the wolves.
                <br/> The wolves also win IMMEDIATELY if the number of living Town roles reaches zero.
                    <br/> &nbsp;</li>
                <li>
                    <strong className="Town role">Town Victory:</strong><br/>
                The Town wins the game if at nightfall or sunrise, there are no wolves left with the Hunting ability. This means that wolf supporter characters do not count, unless they gain the Hunt ability.
                    <br/>Additionally, if there is EVER a situation where the wolves would never be able to kill anyone for the remainder of the game, the game is also declared a win for the Town.
                    <br/> &nbsp;
                </li>

                <li>
                    <strong className="Chaos role">Town Victories:</strong><br/>
                    Once a winning team has been found, all chaos roles look to their individual cards to find out if they have won or not.
                    <br/>
                    In some VERY special cases, a chaos member can also change the victory to a CHAOS VICTORY, where all chaos roles are victorious, and both the wolf and town teams are considered defeated.
                </li>
            </ul>
        </>
    );
}
