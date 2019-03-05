# React Add to Calendar Button
This is a fork of the React Add To Calendar Button built by (jasonsalzman)

## Installation

The package can be installed via NPM:

```
npm install react-add-to-calendar --save
```

You’ll need to install React and Moment separately since they are not included in the package. Below is a simple example on how to use the Add to Calendar button in a React view.

```js
import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

class Example extends React.Component {
  static displayName = 'Example';
  state = {
    event: {
      title: 'Sample Event',
      description: 'This is the sample event provided as an example only',
      location: 'Portland, OR',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    }
  };

  render() {
    return <AddToCalendar event={this.state.event}/>;
  };
}
```
