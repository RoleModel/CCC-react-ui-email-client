import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Email from './Email';

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

  inbox() {
    return this.props.emails.filter(email => email.from !== this.props.myEmail)
  }

  sentbox() {
    return this.props.emails.filter(email => email.from === this.props.myEmail)
  }

  renderList(list) {
    return list.map((email, i) => <Email email={email} key={i} toggleDisplay={this.toggleDisplay.bind(this)}/>)
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
          {this.renderList(received)}
        </TabPanel>
        <TabPanel>
          {this.renderList(sent)}
        </TabPanel>
      </Tabs>
    );
  }
}


export default EmailList;
