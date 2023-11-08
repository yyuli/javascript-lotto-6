import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const outputView = {
  printPurchaseSummary(count) {
    MissionUtils.Console.print(`\n${count}${OUTPUT_MESSAGE.PURCHASE_SUMMARY}`);
  },

  printLottoNumbersList(list) {
    MissionUtils.Console.print(`[${list.join(', ')}]`);
  },

  printTitle() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.TITLE);
  },

  printResult(rank, resultCount) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGE[rank]}${resultCount}개`);
  },
};

export default outputView;
