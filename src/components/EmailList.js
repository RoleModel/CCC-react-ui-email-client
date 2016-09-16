import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Email from './Email';
import CssTransitionGroup from 'react-addons-css-transition-group';

class EmailList extends Component {


  toggleDisplay(modifiedEmail) {
    const emails = this.props.emails

    const updatedEmails = emails.map(email => {
      if (modifiedEmail === email) {
        return {...email, isShown: !email.isShown}
      } else {
        return {...email, isShown: false}
      }
    })

    this.props.setState({emails: updatedEmails})
  }

  deleteEmail(email, event) {
    event.stopPropagation()
    const emails = this.props.emails
    const index = emails.indexOf(email)

    const updatedEmails = [
      ...emails.slice(0, index),
      ...emails.slice(index + 1)
    ]

    this.props.setState({emails: updatedEmails})
  }

  inbox() {
    return this.props.emails.filter(email => email.from !== this.props.myEmail)
  }

  sentbox() {
    return this.props.emails.filter(email => email.from === this.props.myEmail)
  }

  renderList(list) {
    return list.map((email, i) => <Email email={email} key={email.from} toggleDisplay={this.toggleDisplay.bind(this)} deleteEmail={this.deleteEmail.bind(this)} isTouch={this.props.isTouch}/>)
  }

  render() {
    const received = this.inbox()
    const sent = this.sentbox()
    return (
      <Tabs>
        <TabList>
          <Tab>Received</Tab>
          <Tab>Sent</Tab>
        </TabList>
        <TabPanel>
          <CssTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
            {this.renderList(received)}
          </CssTransitionGroup>
        </TabPanel>
        <TabPanel>
          {this.renderList(sent)}
        </TabPanel>
      </Tabs>
    );
  }
}


export default EmailList;
