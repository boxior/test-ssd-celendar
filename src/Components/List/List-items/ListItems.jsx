import React, {Component} from 'react';
import './ListItems.scss';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.obj = {
            url: "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
        };
    }

    render() {
        // console.log(this.props);
        return (
            <ul className="list">
                {/*<li className="list__item">*/}
                    {/*<a className="list__link">*/}

                    {/*</a>*/}
                {/*</li>*/}
                {this.props.items}
            </ul>
        );
    }


}

export default ListItems;