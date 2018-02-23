import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/index';
import { bindActionCreators } from 'redux';

class Searcher extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.onTextChange = this._onTextChange.bind(this);
        this.onSubmit = this._onSubmit.bind(this);
        /*debugger;
        this.setState({
            text: '',
            items:[]
        });*/
    }

    _onSubmit(e) {
        e.preventDefault();
        if(this.state == null){
            this.setState({
                text:this.state.text,
                items:this.state.items
            });
        }
        var url = 'https://itunes.apple.com/search?term=' + this.state.text;
        this.props.fetchData(url);
        //Actions.TestText(this.state.text);
    }

    _onTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className="row">
                <form className="col s6" onSubmit={this.onSubmit}>
                    <div className="input-field col s4">
                        <i className="material-icons prefix">search</i>
                        <input id="icon_prefix"
                               type="text"
                               value={this.props.text}
                               onChange={this.onTextChange}
                               className="validate _filter"/>
                    </div>
                    <div className="col s2 align-wrapper">
                        <button type="submit" className="waves-effect waves-light btn">Search</button>
                    </div>

                </form>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    debugger;
    return {
        items: state.items,
        text: state.text
    };
};

function mapDispatchToProps (dispatch) {
    return ({
        //fetchData: bindActionCreators(fetchData, dispatch)
        fetchData: (url) => {dispatch(fetchData(url))}
    });
}


export {Searcher};
export default connect(mapStateToProps, {fetchData})(Searcher);


