import React from 'react';
import HD_Cart_Data from "../images/HD_Cart_Data.png";
import HD_Cart_Back_No_Cables from "../images/HD_Cart_Back_No_Cables.png";
import HD_Cart_AV from "../images/HD_Cart_AV.png";

class DiagramViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      layers: [],
    }

    this.toggleLayer = this.toggleLayer.bind(this);
  }

  componentDidMount() {
    //i'm imagining the API will return an array of images like so:
    let imageData = [
      {
        img: HD_Cart_Data,
        name: "HD_Cart_Data"
      },
      {
        img: HD_Cart_Back_No_Cables,
        name: "HD_Cart_Back_No_Cables"
      },
      {
        img: HD_Cart_AV,
        name: "HD_Cart_AV"
      }];

    for (let i = 0; i < imageData.length; i++){
      imageData[i].show = true;
      imageData[i].id = i;
    }

    let newLayers = [...imageData];
    this.setState({ layers: newLayers });
  }

  toggleLayer(id) {
    let newLayers = this.state.layers;
    newLayers[id].show = !this.state.layers[id].show;
    this.setState({layers: newLayers});
  }

  render() {
    return (
      <div id="container">
        <div id="layer-selector">
          <ul>
            {this.state.layers.map((layer) =>
              <li key={layer.id}>
                <button onClick={() => this.toggleLayer(layer.id)}>Toggle {layer.name}</button>
              </li>
            )}
          </ul>
        </div>
        <div id="main-diagram-view">
          {this.state.layers.map((layer) =>
            <div key={layer.id} className="layer-contianer">
              {layer.show &&
                <img
                  className="layer"
                  src={layer.img}></img>
              }
            </div>
          )}
        </div>
      </div>
    )
  }
}

module.exports = DiagramViewer;
