import React, {Component} from 'react';
import './Tr.scss';
// import TrOne from "./TrOne";

class Tr extends Component {
    // constructor(props) {
    //     super(props);

        // this.data = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

        // this.state = {
        //     items: ""
        // };

    // }
    // createList = (data) => {
    //     const item = data.map((el) => {
    //         return (
    //             <div key={el} onMouseDown={this.props.mouseDownHour} className={this.props.hour}></div>
    //         );
    //     });
    //     this.setState({items: item});
    // };

    // componentDidMount() {
    //     this.createList(this.data);
    // };
    render() {

        return (
            <div id={this.props.dayName} className="tr">
                <div className={this.props.day}>{this.props.dayName}</div>
                <div className={this.props.allDay} onClick={this.props.clickAllDay}></div>
                {/*<TrOne tr={this.state.items}/>*/}
                <div className="tr__day-hours">
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                    <div onMouseDown={this.props.mouseDownHour} onMouseUp={this.props.mouseUpHour} onMouseMove={this.props.mouseMoveHour} className={this.props.hour}></div>
                </div>
            </div>

        );
    }
}

export default Tr;