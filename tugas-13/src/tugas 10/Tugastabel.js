import React from 'react';


class Tugastabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.buah.nama}</td>
        <td>{this.props.buah.harga}</td>
        <td>{this.props.buah.berat / 1000} kg</td>
      </tr>
    );

  }
}
export default Tugastabel