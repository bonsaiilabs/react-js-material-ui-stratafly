import React from 'react';
import { infantAloneWarning, maxTravellersWarning } from '../../../../shared/app-constants';
import TravellerWarning from '../TravellerWarning';
import { CancelDone } from '../CancelDone';

export const WarningOrActionButton = props => {
  const { showMaxWarning, showInfantWarning, onCancel, onDone } = props;
  const showWarning = showMaxWarning || showInfantWarning;
  if (!showWarning) return <CancelDone onCancel={onCancel} onDone={onDone} />;

  if (showMaxWarning) return <TravellerWarning warning={maxTravellersWarning} />;

  if (showInfantWarning) return <TravellerWarning warning={infantAloneWarning} />;
};
