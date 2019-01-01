pragma solidity ^ 0.5 .0;

contract Project {
    // ----------------------合约变量-----------------------------------
    address payable public requestor; // 提问者
    address payable public respondent; // 回答者

    enum State { // 问题状态
        Open,
        Close
    }

    mapping(string => address[]) questionInfo; // 问题详情
    mapping(address => State) questionState; // 问题状态
    mapping(address => string) anwerInfo; // 回答内容
    mapping(address => uint) price; // 问题的酬劳


    struct QuestionTransaction {
        address payable questioner; // 提问者
        address payable respondent; // 回答者
        uint price; // 问题价格
        string question; // 问题内容
        string answer; // 回答内容
        State state;
    }

    // 用队列存储提问交易，最新的交易放到队尾
    mapping(uint => QuestionTransaction) transationList;
    uint32 transactionCount = 0; // 队尾，即交易数量

    // ------------------------end 合约变量---------------------------------

    // ------------------------得到合约信息---------------------------------
    function getTransaction(uint id) public view returns(address) {
        //  根据问题id得到问题合约的地址
        return TransationList[id];
    }

    function getQuesioner(uint id) public view returns(address) {
        // 根据id得到提问者的钱包地址
        return transationList[id].questioner;
    }

    function getRespondent(uint id) public view returns(string memory) {
        // 根据id得到提回答者的钱包地址
        return transationList[id].respondent;
    }

    function getPrice(uint id) public view returns(uint) {
        // 根据id得到该问题的酬劳
        return transationList[id].price;
    }

    function getQuestion(uint id) public view returns(uint) {
        // 根据id得到该问题的内容
        return transationList[id].question;
    }

    function getAnswer(uint id) public view returns(uint) {
        // 根据id得到该问题的回答
        return transationList[id].answer;
    }

    function getTransactionCount() public view returns(uint) {
        // 现有问题数目
        return transactionCount;
    }
    // ------------------------end 得到合约信息---------------------------------

    // ----------------------判断回答模块-----------------------------------

    // 判断是否在问题的可回答状态
    modifier isQuestionOpened(State _state) {
        require(
            _state == State.Open,
            "Error state."
        );
        _;
    }

    // 判断是否在问题的关闭状态
    modifier isQuestionClosed(State _state) {
        require(
            _state == State.Close,
            "Error state."
        );
        _;
    }
    // ----------------------end 判断回答模块-----------------------------------

    // -----------------------提问逻辑处理模块----------------------------------
    function publish(string memory delegate, uint memory price) public payable {
        require(price >= 1 ether, "支付的金额必须大于1个以太币"); // 支付的金额必须大于1个以太币
        valueInfo[msg.sender] = msg.value;
        delegateInfo[delegate].push(msg.sender);
        destinationInfo[msg.sender] = destination;
        transactionCount = transactionCount + 1; // 提问合约放到队尾
        transationList[transactionCount].requestor = msg.sender;
        transationList[transactionCount].pay = msg.value;
        transationList[transactionCount].respondent = msg.sender; // 默认为回答者为提问者本身
        transationList[transactionCount].state = State.Open; // 提出的问题默认为开放编辑状态
    }
    // -----------------------end 提问逻辑处理模块----------------------------------

    // -----------------------回答与接纳模块----------------------------------
    // 回答问题
    function answerQuestion(address payable addr) public payable {
        answer = msg.answer; // 回答内容
        respondent = addr;
        return msg.answer;
    }

    // 提问者接纳回答
    function confirmAnswer(uint questionId) public payable isQuestionOpened(questionTransation[questionId]) {
        // 更新交易状态为完成
        questionTransation[questionId] = State.Close;
        delegator.transfer(questionTransation[questionId].respondent + price ether);
    }
    // -----------------------end 回答与接纳模块----------------------------------

}