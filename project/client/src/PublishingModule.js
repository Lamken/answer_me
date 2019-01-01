// 问题编辑的界面
import React from 'react'
import {Form,FormGroup,Col,ControlLabel,FormControl,Button,Panel} from 'react-bootstrap'
class PublishingModule extends React.Component {


  render() {
    return (
      <Panel bsStyle="primary" id="releasepannel">
      <Panel.Heading>
        <Panel.Title componentClass="h3">提问</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
      <Form horizontal onSubmit={(event) => {
          event.preventDefault()
          this.props.releaseDelegate(event.target.source.value,event.target.destination.value,event.target.code.value,event.target.pay.value)
        }}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            问题详情
          </Col>
          <Col sm={10}>
            <FormControl name="Question" type="string" placeholder="问题详情 如：php是不是世界上最好的语言" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            问题酬劳
          </Col>
          <Col sm={10}>
            <FormControl name="pay" type="number" placeholder="问题酬劳" />
          </Col>
        </FormGroup>

      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" id="releasebutton">
          <Button type="submit" className='btn btn-success btn-lg'>提问</Button>
        </div>  
        <div class="btn-group mr-2" role="group" id="releasebutton">
        <Button onClick={(event) => {
            this.props.clickReturn()
          }} className='btn btn-primary btn-lg'>返回</Button>
        </div>
      </div>
      </Form>
      </Panel.Body>
    </Panel>
    )
  }
}

export default PublishingModule