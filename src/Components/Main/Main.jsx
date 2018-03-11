import React, {Component} from 'react';
import './Main.scss';
import Tr from "./Tr/Tr";
import Footer from "../Footer/Footer";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            mouseDownDay: "",
            "mo": {
                id: "mo",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "tu": {
                id: "tu",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "we": {
                id: "we",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "th": {
                id: "th",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "fr": {
                id: "fr",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "sa": {
                id: "sa",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            },
            "su": {
                id: "su",
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            }
        };
        this.initialState = this.state;
        // this.state

        this.json = {

            "mo": [
                {
                    "bt": 240,
                    "et": 779
                }
            ],
            "tu": [],
            "we": [],
            "th": [
                {
                    "bt": 240,
                    "et": 779
                },
                {
                    "bt": 1140,
                    "et": 1319
                }
            ],
            "fr": [
                {
                    "bt": 660,
                    "et": 1019
                }
            ],
            "sa": [
                {
                    "bt": 0,
                    "et": 1439
                }
            ],
            "su": []
        };

    }



    setActiveStateAllDay = (day) => {
        let obj = {};
        if (!this.state[day].active) {
            obj[day] = {
                id: day,
                day: "tr__day-name active-day",
                allDay: "tr__day-all active-all-day",
                hour: "tr__day-hour active-hour",
                active: true
            };
        }
        this.setState(obj);

    };

    setDefaultStateAllDay = (day) => {
        let obj = {};
        if (this.state[day].active) {
            console.log('sd');
            obj[day] = {
                id: day,
                day: "tr__day-name",
                allDay: "tr__day-all",
                hour: "tr__day-hour",
                active: false
            };
        }
        this.setState(obj);
    };

    setDefaultAll = () => {
        this.setState(this.initialState);
        let $hours = document.querySelectorAll('.tr__day-hour'),
            hourArray = Array.prototype.slice.call($hours);
        hourArray.forEach(function (el) {
            el.classList.remove('active-hour');
        });
        console.log("set default All");
    };

    clickAllDay = e => {
        e.preventDefault();
        let day = e.target.parentNode.id;
        this.setActiveStateAllDay(day);
        this.setDefaultStateAllDay(day);
    };

    setMouseDownTrue = (day) => {
        // let dayCurrent =
        let obj = this.state;
        obj.mouseDown = true;
        obj.mouseDownDay = day;
        obj[day] = {
            id: day,
            day: "tr__day-name active-day",
            allDay: "tr__day-all",
            hour: "tr__day-hour",
            active: false
        };
        console.log(obj);

        this.setState(obj);

    };

    setMouseDownFalse = () => {
        this.setState({mouseDown: false});
    };

    setActiveStateHour = (e) => {
        if (this.state.mouseDown && e.target.parentNode.parentNode.id === this.state.mouseDownDay) {
            e.target.classList.add('active-hour');

            console.log("move");
        }
    };

    mouseDownHour = e => {
        let day = e.target.parentNode.parentNode.id;
        this.setMouseDownTrue(day);
        e.target.classList.add('active-hour');

        console.log("mouse Down");
    };

    mouseUpHour = e => {

    };

    documentMouseUp = () => {
        let self = this;

        document.addEventListener('mouseup', function () {
            self.setMouseDownFalse();

            console.log("document");
        });
    };

    mouseMoveHour = e => {
        this.setActiveStateHour(e);
    };

    componentDidMount() {
        this.documentMouseUp();
    };

    clearAllStates = (e) => {
        console.log(e.target);
        this.setDefaultAll();
    };


    render() {
        return (
            <article className="main">
                <div className="main__table">
                    <div className="table">
                        <div className="table__header-table">
                            <div className="header-table">
                                <div className="header-table__days">
                                    ALL <br/> DAY
                                </div>
                                <div className="header-table__hours">
                                    <div className="header-table__period">00:00</div>
                                    <div className="header-table__period">03:00</div>
                                    <div className="header-table__period">06:00</div>
                                    <div className="header-table__period">09:00</div>
                                    <div className="header-table__period">12:00</div>
                                    <div className="header-table__period">15:00</div>
                                    <div className="header-table__period">18:00</div>
                                    <div className="header-table__period">21:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="table__body">
                            <div className="body">
                                <div className="body__tr">
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.mo.id}
                                        day={this.state.mo.day} allDay={this.state.mo.allDay}
                                        hour={this.state.mo.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.tu.id}
                                        day={this.state.tu.day} allDay={this.state.tu.allDay}
                                        hour={this.state.tu.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.we.id}
                                        day={this.state.we.day} allDay={this.state.we.allDay}
                                        hour={this.state.we.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.th.id}
                                        day={this.state.th.day} allDay={this.state.th.allDay}
                                        hour={this.state.th.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.fr.id}
                                        day={this.state.fr.day} allDay={this.state.fr.allDay}
                                        hour={this.state.fr.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.sa.id}
                                        day={this.state.sa.day} allDay={this.state.sa.allDay}
                                        hour={this.state.sa.hour}/>
                                    <Tr mouseMoveHour={this.mouseMoveHour} mouseUpHour={this.mouseUpHour}
                                        mouseDownHour={this.mouseDownHour} clickAllDay={this.clickAllDay}
                                        dayName={this.state.su.id}
                                        day={this.state.su.day} allDay={this.state.su.allDay}
                                        hour={this.state.su.hour}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer onclick={this.clearAllStates}/>
            </article>
        );
    }


}

export default Main;