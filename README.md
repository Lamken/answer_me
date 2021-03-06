## 期末最终报告
完整版报告请查看docs下的pdf

项目地址：https://github.com/Lamken/answer_me
此文档介绍 answer_me(基于区块链的轻量化问答社区)的之智能合约部署及运行方法：

- [技术选择](#1技术选择)
- [选题背景与依据](#2选题背景)
- [使用说明](#3使用说明)
- [测试](#4测试)
### 0、项目结构
```bash
-docs  # 项目文档
-project  # 项目内容
```

### 1、技术选择
在truffle框架部署智能合约的基础上，使用ganache作为私链，同时使用react和boost提供UI
- 智能合约部署：truffle
- 底层区块链实现：使用ganache作为测试私链
- UI：使用了react和bootstrap

### 2、选题背景与依据
#### 需求背景
知识付费越来越成为当前知识交流社区的重要盈利模式，然而回答者常常良莠不齐，同时由于当前主流社区存在中心化问题，导致部分回答可能会被屏蔽与修改。对于提问者而言，在使用区块链技术之后，能够完整并客观记录每一位回答者的回答轨迹，为提问者提供依据，从而选择更可信的回答。对于回答者而言，每一个优质回答都能得在所有人见证下得到报酬，激发回答动力，使社区能够有更多的专业回答。

#### 区块链的优势
众所周知，区块链重要的特性是其去中心化与“共同承认”，而在忠实记录回答者回答轨迹上能够让每一位用户都能得到一份完整的备份，从而实现高质量而客观高端付费知识问答社区

#### 功能描述
提问者发布问题与报酬，并在多个回答者提供的问题答案中确认一个有用并支付报酬。回答对所有用户可见。


### 3、使用说明
运行环境
```txt
Truffle:     v5.0.0 (core: 5.0.0)   
Solidity:    v0.5.0 (solc-js)
Node:        v8.10.0
npm:         v5.6.0
ganache:     v1.2.2.24
```

在运行dapp前，可以先运行project下的配置脚本set_enviroment.sh
```bash
git clone https://github.com/Lamken/answer_me
cd answer_me
sh set_enviroment.sh
```

### 4、参考链接
[[1]GETTING STARTED WITH DRIZZLE AND REACT](https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react)

[[2]BUILDING DAPPS FOR QUORUM: PRIVATE ENTERPRISE BLOCKCHAINS](https://en.wikipedia.org/wiki/SHA-1)

[[3]ETHEREUM PET SHOP -- YOUR FIRST DAPP](https://truffleframework.com/tutorials/pet-shop)

