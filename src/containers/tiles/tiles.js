import React, { Component } from 'react';
import axios from 'axios';
import Tile from '../../components/tiles/tile/tile';
import LoadButton from '../../components/loadButton/loadButton';
import './tiles.css';
import SortBy from '../../components/tiles/sort/sort';


class Tiles extends Component {

  /**
   * Tiles Component
   * The only component which has state.
   */
  state ={
    tiles: [],
    lazyLoaded:[]
  }
  /**
   * Method componentDidMount
   * This method is used to send the API call, and returns a promise.
   * This returned data is mapped over and used to set the state.
   */
  componentDidMount = () => {
    axios.get('https://brooklyn.gaia.com/videos/term/119931?Accept=application/json')
    .then(response => {
      //console.log(response);
      const tiles = response.data.titles;
      const updatedPosts = tiles.map((tile) => {
        return{
          ...tile
        }
      });
      const initialLazy = updatedPosts.slice(0, 16);
      this.setState({
        tiles: updatedPosts,
        lazyLoaded: initialLazy
      });
    //console.log(this.state.lazyLoaded);
    });
  }
  /**
   * loadMoreHandler Function
   * This function is triggered by an onClick event in the child <LoadButton />
   * This function maps over the stored 'tiles' state, and creates a new version based on
   * an arbitrary increment of 16 because I liked how it looked/felt. This new object is
   * then rendered.
   */
  loadMoreHandler = () => {
    const currentLoaded = this.state.lazyLoaded.length;
    const updateLoadedCount = currentLoaded + 16;
    const loadMore = this.state.tiles.slice(0, updateLoadedCount);
    this.setState({lazyLoaded: loadMore});
    // console.log(loadMore);
  }
  /**
   * sortByHandler Function
   * This function receives the category value from the child component <SortBy />
   * This function then creates a copy of state.tiles and filters it based on the
   * category. This new object is then set as the state.lazyLoaded and rendered.
   */
  sortByHandler = (category) => {
    if(category === "All" || category === "Sort By"){
      const currentLazy = this.state.tiles;
      this.setState({
        lazyLoaded: currentLazy
      });
    } else {
      const currentLazy = this.state.tiles;
      this.setState({
        lazyLoaded: currentLazy.filter(item => item.admin_category.name === category )
      });
    }
  }


  render(){
    /**
     * const tiles
     * this constant is used to map over state.lazyLoaded, and utilize the formatting
     * from the <Tile /> child component as its output for each item. These instances
     * are then rendered via the JSX {tiles} in the return.
     */
    const tiles = this.state.lazyLoaded.map((tile) => {
      return <Tile
        key={tile.nid}
        image={tile.keyart_16x9_withtext.keyart_1180x664}
        thumbsup={tile.fivestar.up_count.value}
        thumbsdown={tile.fivestar.down_count.value}
        segment={tile.site_segment.name}
        title={tile.title}/>
    });
      return(
        <div>
          <div className="tiles__title">
            <span id="title-span" className="tiles__title-span">VIDEOS FOR YOU</span>
            <span className="sort-dropdown">
              <SortBy sortBy={this.sortByHandler} />
            </span>
          </div>
          <div className="board">{tiles}</div>
          <LoadButton
            LoadNumber = {this.state.lazyLoaded.length}
            clicked={this.loadMoreHandler}/>
        </div>
      );
  }
}

export default Tiles;
