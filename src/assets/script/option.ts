/**
 * mitt事件
 */
export enum EVENT {
  /**
   * 随机播放
   */
  randomPlay = 'randomPlay',
  /**
   * 停止播放
   */
  stopPlay = 'stopPlay',
  /**
   * 滚动到指定位置
   */
  autoScroll = 'autoScroll'
}

/**
 * 信息相关的I18N
 */
export enum INFO_I18N {
  title = 'info.title',
  toGithub = 'info.toGithub',
  notOfficial = 'info.notOfficial',
  fullName = 'info.fullName',
  vtbbtn = 'vtbbtn',
  voiceTotal = 'voiceTotal',
  voiceTotalTip = 'voiceTotalTip',
  lang = 'lang'
}

/**
 * 操作相关的I18N
 */
export enum ACTION_I18N {
  randomplay = 'action.randomplay',
  stopvoice = 'action.stopvoice',
  overlap = 'action.overlap',
  overlapTip = 'action.overlapTip',
  autoRandom = 'action.autoRandom',
  autoRandomTip = 'action.autoRandomTip',
  loop = 'action.loop',
  loopTip = 'action.loopTip',
  noplay = 'action.noplay'
}

/**
 * 播放设置
 */
export interface PlaySetting {
  /**
   * 是否显示加载图标
   */
  loading: boolean;
  /**
   * 是否显示错误效果
   */
  error: boolean;
  /**
   * 正在播放的语音对象
   */
  nowPlay: VoicesItem | null;
  /**
   * 是否重叠播放
   */
  overlap: boolean;
  /**
   * 是否随机播放
   */
  autoRandom: boolean;
  /**
   * 是否循环播放
   */
  loop: 0 | 1 | 2 | 3;
  /**
   * 是否开启详情显示
   */
  showInfo: boolean;
}

/**
 * 搜索设置
 */
export interface SearchData {
  /**
   * 搜索文字
   */
  value: string;
  /**
   * 结果列表
   */
  list: string[];
  /**
   * 需要高亮的结果索引
   */
  index: number;
}

export type Voices = VoicesCategory[] | VoicesOrigin[]

/**
 * 来源分类
 */
export interface VoicesOrigin {
  title: string;
  url?: string;
  voiceList: VoicesItem[];
}

/**
 * 语音分类
 */
export interface VoicesCategory {
  name: string;
  translate: Translate;
  voiceList: VoicesItem[];
}

export interface CategoryItem {
  name: string;
  translate: Translate;
}

/**
 * 语音对象
 */
export interface VoicesItem {
  /**
   * 语音名称
   */
  name: string;
  /**
   * 文件名
   */
  path: string;
  translate: Translate;
  /**
   * 是否显示表情包
   */
  usePicture?: Translate;
  /**
   * 所属分类
   */
  category: string;
  /**
   * 添加日期
   */
  date?: string;
  /**
   * 来源信息
   */
  mark?: Mark;
}

export interface Mark {
  /**
   * 标题
   */
  title: string;
  /**
   * 时间段
   */
  time?: string;
  url?: string;
};

export interface Translate {
  'zh-CN'?: string;
  'en-US'?: string;
}

/**
 * 播放器列表
 */
export type PlayerList = Map<any, Player>

/**
 * 播放器对象
 */
export interface Player {
  name: string;
  audio: HTMLAudioElement;
  voicesKey?: [string, string];
}

export interface FriendlyLink {
  name: string;
  url: string;
  background?: string;
  color?: string;
}
