/**
 * 音域調整量の自動入力のためのワークアラウンド。
 * 本来エンジンから得るべき音域調整量を、マジックナンバーとして直接データ化している。
 *
 * FIXME: スタイルの音域をエンジンから取得可能にし、音域調整量を計算するように修正する。
 */

import { createLogger } from "@/helpers/log";
import { Singer } from "@/store/type";
import { CharacterInfo, EngineId } from "@/type/preload";

const logger = createLogger("sing/workaroundKeyRangeAdjustment");

const workaroundKeyRangeAdjustmentValues: Record<
  string,
  Record<string, number>
> = {
  四国めたん: {
    正常: -4,
    温柔: -4,
    傲娇: -5,
    诱惑: -4,
    念叨: -9,
  },
  ずんだもん: {
    正常: -2,
    温柔: 0,
    傲娇: -3,
    诱惑: 0,
    念叨: -7,
    慵懒: -3,
    哭泣: 6,
  },
  春日部つむぎ: {
    正常: -2,
  },
  雨晴はう: {
    正常: 0,
  },
  波音リツ: {
    正常: -8,
    クイーン: -5,
  },
  玄野武宏: {
    正常: -17,
    喜び: -9,
    ツンギレ: -14,
    悲しみ: -18,
  },
  白上虎太郎: {
    ふつう: -14,
    わーい: -8,
    びくびく: -7,
    おこ: -9,
    びえーん: -3,
  },
  青山龍星: {
    正常: -22,
    熱血: -18,
    不機嫌: -23,
    喜び: -21,
    しっとり: -27,
    かなしみ: -22,
  },
  冥鳴ひまり: {
    正常: -7,
  },
  九州そら: {
    正常: -7,
    あまあま: -2,
    ツンツン: -6,
    セクシー: -4,
  },
  もち子さん: {
    正常: -5,
    "セクシー／あん子": -7,
    泣き: -2,
    怒り: -3,
    喜び: -2,
    のんびり: -5,
  },
  剣崎雌雄: {
    正常: -18,
  },
  WhiteCUL: {
    正常: -6,
    たのしい: -3,
    かなしい: -7,
    びえーん: 0,
  },
  後鬼: {
    "人間ver.": -7,
    "ぬいぐるみver.": -2,
  },
  "No.7": {
    正常: -8,
    アナウンス: -10,
    読み聞かせ: -9,
  },
  ちび式じい: {
    正常: -18,
  },
  櫻歌ミコ: {
    正常: -6,
    第二形態: -12,
    ロリ: -7,
  },
  "小夜/SAYO": {
    正常: -4,
  },
  ナースロボ＿タイプＴ: {
    正常: -6,
    楽々: -3,
    恐怖: -4,
  },
  "†聖騎士 紅桜†": {
    正常: -15,
  },
  雀松朱司: {
    正常: -21,
  },
  麒ヶ島宗麟: {
    正常: -17,
  },
  春歌ナナ: {
    正常: -2,
  },
  猫使アル: {
    正常: -8,
    おちつき: -9,
    うきうき: -7,
  },
  猫使ビィ: {
    正常: -1,
    おちつき: -3,
  },
  中国うさぎ: {
    正常: -8,
    おどろき: -4,
    こわがり: -2,
    へろへろ: -4,
  },
  栗田まろん: {
    正常: -14,
  },
  あいえるたん: {
    正常: -2,
  },
  満別花丸: {
    正常: -4,
    元気: 2,
    ささやき: -33,
    ぶりっ子: 0,
    ボーイ: -10,
  },
  琴詠ニア: {
    正常: -4,
  },
};

// 不想翻译了好累（），有没有好心人救一下

/**
 * 指定した歌手の音域調整量を取得するワークアラウンド。
 * ハミングの場合はマジックナンバーを使う。
 * 歌手の場合は0を返す。
 */
export function getWorkaroundKeyRangeAdjustment(
  engineCharacterInfos: Record<EngineId, CharacterInfo[]>,
  singer: Singer,
): number {
  const defaultKeyRangeAdjustment = 0;

  const characterInfos = engineCharacterInfos[singer.engineId];
  if (characterInfos == undefined) {
    logger.warn("characterInfos not found.", singer);
    return defaultKeyRangeAdjustment;
  }

  const characterInfo = characterInfos.find((c) =>
    c.metas.styles.find((s) => s.styleId === singer.styleId),
  );
  if (characterInfo == undefined) {
    logger.warn("characterInfo not found.", singer);
    return defaultKeyRangeAdjustment;
  }

  const styleInfo = characterInfo.metas.styles.find(
    (s) => s.styleId === singer.styleId,
  );
  if (styleInfo == undefined) {
    logger.warn("styleInfo not found.", singer);
    return defaultKeyRangeAdjustment;
  }

  if (styleInfo.styleType == "frame_decode") {
    // ハミングの場合はマジックナンバーを使う
    const singerName = characterInfo.metas.speakerName;
    const styleName = styleInfo.styleName;
    if (styleName == undefined) {
      logger.warn("styleName not found.", singer);
      return defaultKeyRangeAdjustment;
    }

    const keyRangeAdjustment =
      workaroundKeyRangeAdjustmentValues[singerName]?.[styleName];
    if (keyRangeAdjustment == undefined) {
      // 新しいキャラなどの場合はここに来る
      logger.warn("keyRangeAdjustment not found.", singer);
      return defaultKeyRangeAdjustment;
    }

    return keyRangeAdjustment;
  } else {
    // 歌手の場合はそのまま
    return 0;
  }
}
