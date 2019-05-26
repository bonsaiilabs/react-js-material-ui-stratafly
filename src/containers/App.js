import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';
import { SearchForm } from '../components/SearchForm';
import { getDateToString } from '../shared/util';

class App extends Component {
  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;

    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchForm
          selectedRadio={'round-trip'}
          onChangeRadio={() => console.log('Changed trip type')}
          onClickTraveller={() => console.log('Clicked traveller')}
          totalTravellers={'1'}
          fromDate={getDateToString(new Date())}
          toDate={getDateToString(new Date())}
        />
        <Empty />
      </MuiThemeProvider>
    );
  }
}
export default App;
