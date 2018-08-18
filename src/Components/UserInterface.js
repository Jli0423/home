import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Service from './Service/Services';
import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

class UserInterface extends Component {
  static propTypes = {
    commandTrigger: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    // creating reference to input
    this.autoFocusRef = React.createRef();
  }

  // future: keep input history until clear/cls to be more terminal-like
  componentWillMount() {
    this.setState({
      lineInputAmounts: 1,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const { lineInputAmounts } = this.state;
    if (prevState.lineInputAmounts > lineInputAmounts) {
      this.setState({
        lineInputAmounts: 1,
      });
    }
  }

  userCommandInput(e) {
    // override default onSubmit so page does not refresh
    e.preventDefault();
    const {
      lineInputAmounts,
    } = this.state;
    const inputValue = this.autoFocusRef.value;
    const { commandTrigger } = this.props;
    Service.commandValidator(inputValue)
      .then((status) => {
        commandTrigger(status);
        this.setState({
          lineInputAmounts: 0,
        });
      })
      .catch(() => {
        commandTrigger('unknown');
      });

    this.autoFocusRef.value = '';
    // this is always here to create next line
    // not sure why .finally() isn't working...
    this.setState({
      lineInputAmounts: lineInputAmounts + 1,
    });
  }

  render() {
    return (
      <Wrapper>
        <UserInputFields>
          <UserInputLabelUser htmlFor="UserInput">
            { CommandPrompt.initializeStatement[0] }
          </UserInputLabelUser>
          <UserInputLabelLocation htmlFor="UserInput">
            { CommandPrompt.initializeStatement[1] }
          </UserInputLabelLocation>
          <UserInput
            innerRef={(focus) => { this.autoFocusRef = focus; }}
            type="text"
            name="userInput"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            id="UserInput"
            autoFocus
          />
          <UserSubmit
            onClick={userInput => this.userCommandInput(userInput)}
          />
        </UserInputFields>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

const UserInputFields = styled.form`
  display: block;
  width: 100%;
  height: auto;
  color: ${Colors.white};
  font-size: 1.2em;
`;

const UserInput = styled.input`
  outline: none;
  width: calc(100% - 24.5em);
  text-overflow: 1;
  background-color: ${Colors.transparent};
  border: none;
  color: ${Colors.white};
  clear: none;
`;

const UserSubmit = styled.button`
  display: none;
`;

const UserInputLabelLocation = styled.span`
  color: ${Colors.darkBlue};
`;

const UserInputLabelUser = styled.span`
  color: ${Colors.green};
`;


export default UserInterface;
