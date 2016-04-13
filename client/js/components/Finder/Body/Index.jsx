var React = require('react');
var Griddle = require('griddle-react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var FeatureStore = require('../../../stores/FeatureStore');

var columnMeta = [
  {
    "columnName": "id",
    "locked": true,
    "visible": false,
  }, {
    "columnName": "Title",
    "order": 1,
    "locked": false,
    "visible": true,
  }, {
    "columnName": "Client",
    "order": 2,
    "locked": false,
    "visible": true,
  }, {
    "columnName": "Priority",
    "order": 3,
    "locked": false,
    "visible": true,
  }
];

var FinderBody = React.createClass({
  getInitialState: function () {
    return {
      features: '',
    }
  },

  componentWillMount: function () {
    FeatureStore.get(function (docs) {
      this.setState({
        features: docs
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div style={Style.container} className="container-fluid">
        <div className="row">
          <Griddle
            results={this.getGriddleData()}
            columnMeta={columnMeta}
            columns={["Title","Client","Priority"]}
            resultsPerPage={20}
            onRowClick={this.handleClick_Row} />
        </div>
      </div>
    )
  },

  getGriddleData: function () {
    var result = [];
    if (!this.state.features) { return result; }
    for (var i = 0; i < this.state.features.length; i++) {
      result.push({
        "id": this.state.features[i]._id,
        "Title": this.state.features[i].title,
        "Client": this.state.features[i].client,
        "Priority": this.state.features[i].clientPriority,
      });
    }
    return result;
  },

  handleClick_Row: function (gridRow, event) {
    browserHistory.push("/log/" + gridRow.props.data.id);
  },
});

module.exports = FinderBody;
