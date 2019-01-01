// 用户阅读已有问题及提问的界面
import React from 'react'
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button,
  Panel
} from 'react-bootstrap'
class MainModule extends React.Component {
  render() {
    return (
      <form class="SimpleSearchBar-wrapper">
        <div class="SimpleSearchBar-input TopstoryPageHeader-searchBar Input-wrapper">
        <input class="Input" placeholder="搜索你感兴趣的内容…" value="" />
          <div class="Input-after">
            <button type="button" class="Button TopstoryPageHeader-searchButton Button--primary">
              <svg class="Zi Zi--Search" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                                fill-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <button type="button" class="Button TopstoryPageHeader-askButton Button--primary Button--blue">提问</button>


      <div itemprop="zhihu:question" itemtype="http://schema.org/Question" itemscope="">
    <meta itemprop="url" content="https://www.zhihu.com/question/31844108" />
    <meta itemprop="name" content="为什么很多程序员使用thinkpad而不是同等价位的游戏本？" /><a target="_blank" data-za-detail-view-element_name="Title"
        data-za-detail-view-id="2812" href="/question/31844108/answer/546043687"></a></div>

      <div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"></span><button type="button" class="Button ContentItem-more Button--plain">阅读全文<span
            style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon"
                fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                    fill-rule="evenodd"></path>
            </svg></span></button></div>
    )
    }
}

export default MainModule