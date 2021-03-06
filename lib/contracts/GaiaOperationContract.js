"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const GaiaStableDAOOperator_json_1 = __importDefault(require("./abi/artifacts/contracts/GaiaStableDAOOperator.sol/GaiaStableDAOOperator.json"));
const Contract_1 = __importDefault(require("./Contract"));
class GaiaStableDAOOperatorContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaStableDAOOperator, GaiaStableDAOOperator_json_1.default.abi);
    }
}
exports.default = new GaiaStableDAOOperatorContract();
//# sourceMappingURL=GaiaOperationContract.js.map