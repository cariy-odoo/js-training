/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Scoreboard extends Component {
    static template = "owl_playground.Scoreboard";

    state = useState({ userScore: 0, computerScore: 0 });
}
