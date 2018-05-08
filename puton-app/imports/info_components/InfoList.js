import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios'; // 0.18.0

import InfoDetail from './InfoDetail';

class InfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <InfoDetail key={album.title} album={album} />
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default InfoList;
