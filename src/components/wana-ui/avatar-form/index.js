import React from 'react';
import ReactFilestack, { client } from 'filestack-react';

// HUGE GIANT FIXME THIS SIN WAS ONLY DONE FOR DEADLINES HALP
// We should 110% not store API keys here. Also! I signed up
// for a filestack account for demo purposes, this should be
// changed ASAP. --AB, 10/2017
const apikey = 'Afg12uMqtTpdI9lmVwd89z';

export const AvatarFormField = props => {
  const options = {
    accept: 'image/*',
    maxFiles: 1,
    maxSize: 1024 * 1024,
    fromSources: ['local_file_system', 'facebook', 'url', 'instagram', 'webcam'],
    storeTo: {
      location: 's3',
    },
  };
  // FIXME - pipe these into the API or local state. Skip error
  // handling until post-demo.
  const onSuccess = props.onSuccess ? props.onSuccess : (e) => console.log('onSuccess default handler response', e);
  const onError = props.onError ? props.onError : (e) => {
    // TODO - add real error handling
    console.log(`One or more files failed to upload successfully. Error handling should go here. `, e);
  };
  let bgStyle = { display: 'inherit' };
  if (props.value) {
    const urlString = `url('${props.value}')`;
    bgStyle.backgroundImage = urlString;
  }
  return (
      <ReactFilestack
        apikey={apikey}
        options={options}
        onSuccess={onSuccess}
        onError={onError}
        render={({ onPick }) => (
          <label className="avatar avatar--l avatar--edit margin--m no--margin-t no--margin-lr" style={bgStyle}>
            <input type="file" onClick={onPick} />
          </label>
        )}
      />
  );
};
