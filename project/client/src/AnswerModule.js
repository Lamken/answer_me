// 用户回答问题的界面
import React from 'react'
import {Button,Panel} from "react-bootstrap";

class ChoiceForm extends React.Component {

  render() {
    return (
      <div class="Dropzone RichText ztext" style="min-height: 118px;">
        <div class="DraftEditor-root">
            <div class="public-DraftEditorPlaceholder-root">
                <div class="public-DraftEditorPlaceholder-inner" id="placeholder-5mdts" style="white-space: pre-wrap;">写回答...</div>
            </div>
            <div class="DraftEditor-editorContainer">
                <div aria-describedby="placeholder-5mdts" class="notranslate public-DraftEditor-content" contenteditable="true"
                    role="textbox" spellcheck="true" tabindex="0" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
                    <div data-contents="true">
                        <div class="Editable-unstyled" data-block="true" data-editor="5mdts" data-offset-key="av2ij-0-0">
                            <div data-offset-key="av2ij-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span
                                    data-offset-key="av2ij-0-0"><br data-text="true"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button type="button" class="Button AnswerForm-submit Button--primary Button--blue">提交回答</button>
    
    )
  }
}

export default ChoiceForm