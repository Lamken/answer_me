// 提问者选择最佳回答，并支付酬劳的模块
import React from 'react'
import { Table, Button,Panel } from 'react-bootstrap';

class AcceptForm extends React.Component {
render() {
        var questioner = this.props.delegateInfo[0];
        var destination = this.props.delegateInfo[1];
        var price = this.props.delegateInfo[2];
        var accept = this.props.accept;
        if (price) {
            price = price.toNumber();
        }


            return (
          <Panel bsStyle="primary" id="acceptpanel">
          <Panel.Heading>
            <Panel.Title componentClass="h3">选择最佳回答</Panel.Title>
          </Panel.Heading>
          <Panel.Body>

             <div class="alert alert-warning" role="alert">
                清选择您的最佳回答并支付回答者酬劳
              </div>

              <div class="form-group" id="questionContent">
                <label>问题描述</label>
                <div type="text" id="acceptinfo">{questioner}</div>
              </div>
              
              <div class="form-group" id="answerContent">
                <label>回答内容</label>
                <div type="text" id="acceptinfo">{answer}</div>
              </div> 
              
              <div class="form-group" id="priceButton">
                <label>支付酬劳</label>
                <div type="text" id="acceptinfo">{code}</div>
              </div>

              <div id="acceptbutton">
                <Button bsStyle="success" class="form-control" onClick={(event) => {
                this.props.confirmAnswer(this.props.delegator);
                }}>采用该回答</Button>
              </div>
                
          </Panel.Body>
        </Panel>
        )
    }
}

export default AcceptForm