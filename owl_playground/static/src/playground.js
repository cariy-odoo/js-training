/** @odoo-module **/
import {Card} from './card/card'
import { Component } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { TodoList } from './todolist/todolist';

import { Scoreboard } from "./scoreboard/scoreboard";
import { Button } from "./button/button";
import { Result } from "./result/result";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, TodoList, Card, Scoreboard, Button, Result };
}
