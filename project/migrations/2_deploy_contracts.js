const AnswerContract = artifacts.require("AnswerContract");

module.exports = function(deployer) {
  deployer.deploy(AnswerContract);
};