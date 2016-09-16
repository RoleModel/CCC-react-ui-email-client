import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Email from '../components/Email';
import EmailComposer from '../components/EmailComposer';
import SelectElement from './SelectElement';
import DatePicker from './DatePicker';
import '../index.css';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Email', module)
  .add('default', () => (
    <Email email={{from: 'bill@gmail.com', subject: 'Hi there', content: 'How are you doing?'}}/>
  ));

storiesOf('EmailComposer', module)
  .add('closed', () => (
    <EmailComposer setState={action('setState')} modalIsOpen={false}/>
  ))
  .add('opened', () => (
    <EmailComposer setState={action('setState')} modalIsOpen={true}/>
  ));

storiesOf('SelectElement', module)
  .add('default', () => (
    <SelectElement />
  ))

storiesOf('DatePicker', module)
  .add('default', () => (
    <DatePicker />
  ))
