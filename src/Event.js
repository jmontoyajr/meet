// src/Event.js

import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap'

class Event extends Component {
  state = {
    query: '',
    open: false
  }

  render() {
    return (
      <div className="Event">
        <Button
          type="submit"
          className="details"
          value={this.state.query}
          onClick={!this.state.open}
        />
        <Collapse in={this.state.open}
        />
      </div>
    );
  }
}

export default Event;