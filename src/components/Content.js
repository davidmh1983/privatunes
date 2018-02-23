import React ,{ Component } from 'react';
import Searcher from './Searcher';
import ItemList from './ItemList';

class Content extends Component  {
    constructor(props) {
        super(props);
        let {
            items = []
        } = props;

        this.state = {
            items: items
        };
    }

    render(){
        return (
            <div>
                <Searcher />
                <ItemList items={this.state.items}/>
            </div>
        );
    }

};

export default Content;