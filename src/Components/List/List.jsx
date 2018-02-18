import React, {Component} from 'react';
import './List.scss';
import ListItems from "./List-items/ListItems";

class List extends Component {
    constructor(props) {
        super(props);
        this.obj = {
            url: "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
        };

        this.state = {
            items: ""
        };

        this.getJson(this.obj.url, (err, data) => {
            if (err !== null) {
                console.log('Something went wrong: ' + err);
            } else {
                this.createList(data.feed.entry);
            }
        });
    }

    getJson = (url, callback) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };

    createList = (data) => {
        const item = data.map((el, index) => {
            return (
                <li key={index} className="list__item">
                    <a href={el.link.attributes.href} className="list__link" target="_blank">{el.title.label}</a>
                </li>
            );
        });
        this.setState({items: item});
    };

    render() {
        return (
            <div className="list-wrapper">
                <ListItems items={this.state.items}/>
            </div>
        );
    }
}

export default List;