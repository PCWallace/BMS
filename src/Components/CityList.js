import CityListService from "../Services/CityListService";
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import MovieTheaterService from "../Services/MovieTheaterService";


class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityList: [],
      cListView: [],
      clickedCity : '', 
      tmbcList : []
    };

    this.clickHandler = event=>{
        this.setState({clickedCity : event.currentTarget.dataset.value});
        MovieTheaterService.GetTMBCList(event.currentTarget.dataset.value, (List)=>{
            this.setState({tmbcList : List});
            
        })
    }

    this.cList = ctyList => {
        let i = 4;
      return ctyList.map(city => {
        return (
            <Col className="text-center" key={i++}>
                <div className="badge badge-pill shadow badge-info my-4 px-5 py-2" 
                style={{'cursor':'pointer'}} 
                onClick={this.clickHandler}
                data-value={city.cityId}>
                    <span className="h6">{city.cityName}</span>
                </div>
            </Col>
        );
      });
    };
  }
  componentDidMount() {
    CityListService.GetCityList(list => {
      this.setState({ cityList: list });
      this.setState({ cListView: this.cList(list) });
    });
  }

  render() {
    return (
      <Container className="border mt-2"  key={2}>
        <Row  key={3}>{this.state.cListView}</Row>
      </Container>
    );
  }
}

export default CityList;
