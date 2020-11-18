/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from '../src';

const stories = storiesOf('Timeline', module);

const storybookEvents = [
  {
    title: "Result sent",
    instigator: "System",
    date: new Date(),
    description: [
      "Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised",
      "Test Date: 19-Oct-2020, 9:00:00 am"
    ]
  },
  {
    title: "Patient deferred",
    instigator: "James Smith",
    date: new Date(),
    description: [
      "Defer Reason: Pregnancy",
      "CRM Case Number: CAS-12345-ABCDE",
      "Comments: Requested via the GP form"
    ]
  },
  {
    title: "Next test due date changed",
    instigator: "System",
    date: new Date(),
    description: [
      "Next test due date changed to 10-Oct-2021"
    ]
  },
  {
    title: "Test result added",
    instigator: "System (Edifax)",
    date: new Date(),
    description: [
      "Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised"
    ]
  }
]

stories
  .add('Standard', () => (
    <Timeline events={storybookEvents}></Timeline>
  ));
