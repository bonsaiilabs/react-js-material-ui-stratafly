import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';
import { SearchForm } from '../components/SearchForm';
import { getDateToString, isObjectEmpty } from '../shared/util';
import {defaultTravellers, testFlights} from '../shared/app-constants';
import { SearchResults } from '../components/SearchResults';
import {TravellerDialog} from "../components/SearchForm/TravellerDialog";

class App extends Component {
  state = { departFlights: testFlights };

  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;
    let showEmpty = isObjectEmpty(this.state.departFlights);

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

        <TravellerDialog
          open={true}
          onClose={() => console.log('closingDialog')}
          onDone={() => console.log('Done')}
          personAgeCount={defaultTravellers}
          onAdd={() => console.log('Add travellers')}
          onRemove={() => console.log('Remove travellers')}
          showMaxWarning={false}
          showInfantWarning={false}
        />

            {showEmpty && <Empty />}
        {!showEmpty && <SearchResults flights={testFlights} onSelect={() => console.log('flight-selected')} />}
      </MuiThemeProvider>
    );
  }
}
export default App;
