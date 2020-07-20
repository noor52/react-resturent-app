import React, { Component } from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDishComment: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDishComment: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          {/* <CardImg top src={dish.image} alt={dish.name} /> */}
          <CardBody>
            {/* <CardTitle>{dish.name}</CardTitle> */}
            {/* <CardText>{dish.description}</CardText> */}

            <CardText> {dish.comments[0].comment}</CardText>
            <CardText>
              {" "}
              {dish.comments[0].author}, {dish.comments[0].date}
            </CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDishComment)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
