/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Result extends Component {
    static template = "owl_playground.Result";

    state = useState({ resultMessage: "" });
}
