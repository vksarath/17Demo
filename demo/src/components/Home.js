import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    try {
      let url = 'https://webcdn.17app.co/campaign/pretest/data.json';
      let listData = await (await fetch(url)).json();
      this.setState({ list: [...listData] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const sortedList = this.state.list.sort(function (
      listItem1,
      listItem2
    ) {
      return listItem2.votes - listItem1.votes;
    });
    return (
      <div className="home-content">
        <table className="table-content">
          {sortedList.map((listItem, index) => {
            return (
              <tr className="list-row" key={listItem.userID}>
                <td className="left-column">{index + 1}</td>
                <td>
                <img
                  className="image-avatar"
                  alt=""
                  width="40px"
                  height="40px"
                  src={`${listItem.picture}`}
                />
                </td>
                <td className="display-content">{listItem.displayName}</td>
                <td>{listItem.score}pt</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
