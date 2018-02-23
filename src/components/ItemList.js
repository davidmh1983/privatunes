import React from 'react';
import { connect } from 'react-redux';


const ItemList = (props) => {


    function songPicture(pic){
        var size = pic.split('/source/')[1]='400x400bb.jpg';
        return (pic.split('/source/')[0] + '/source/' + size);
    }

    function listItems(items){
        return(items.map(item => {
            var itemPictures = songPicture(item.artworkUrl100);
            return (
                <div className="card grande col s6 l3 height600">
                    <div className="card-image">
                        <img className="activator" src={itemPictures} />
                    </div>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4 ellipsis">{item.trackName}</span>
                        <p>{item.releaseDate.split('-')[0]}</p>
                    </div>
                </div>
            );
        }))
    }


    return (

        <div className="row">
            {listItems(props.items)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}

export {ItemList};
export default connect(mapStateToProps)(ItemList);

