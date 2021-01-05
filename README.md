# 猫猫按钮 / Hiiro按钮 / Hiiro Button

##### 项目地址: https://hiiro.club/

### 相关链接：
- [Hiiro的Bilibili直播间](https://live.bilibili.com/21919321)

### 参与完善本项目

- 您可以在[Issues](https://github.com/blacktunes/hiiro-button/issues)提出您的建议。
  - 若是请求添加新语音，请使用指定的**issues模板**，不熟悉github的用法也可以到[B站](https://space.bilibili.com/1384118)和我联系

- 如果您可以进行开发，那么请**Fork**本项目进行修改，完成修改后在本项目中发起一个**Pull Request**，详细说明请查看以下条目

### 添加或修改音频/完善翻译

音频文件推荐使用**mp3**格式，请先音量标准化，然后放入`public/voices/`目录

所有的分类和音频信息都存储在`setting/translate`目录的`json`文件中，**添加或修改音频信息**、**完善翻译**，你需要修改对应文件中的内容

`locales.json`和`category.json`分别为UI界面翻译和分类信息，请不要修改文件名，语音信息可以使用除此外的任意名称，可使用多个`json`文件方便管理语音


`category.json`结构示例如下：
```
[
  {
    // 分类命名
    "name": "名言",
    "translate": {
      // 分类中文翻译
      "zh-CN": "猫猫名言~",
      // 分类英文翻译
      "en-US": "witticism~"
    }
  }
]
```

语音文件结构示例如下：
```
[
  {
    // 语音命名
    "name": "baba",
    // 语音文件名
    "path": "baba.mp3",
    "translate": {
      // 语音中文翻译
      "zh-CN": "米娜我是你爸爸",
      // 语音中文翻译
      "en-US": "I'm your Baba"
    },
    // 语音所属分类(对应category的name)
    "category": "名言",
    // 以下属性为可选
    // 添加时间
    "date": "2020-11-11",
    // 语音出处
    "mark": {
      "title": "【Hiiro】读评论 学中文 DD们的评论都是什么东西啊？",
      "time": "0:01~0:03",
      "url": "https://www.bilibili.com/video/BV1ET4y177A8"
    }
  }
]
```
添加`usePicture`字段可以添加鼠标悬浮时显示的图片(请放到`public/voices/img`目录)

### 参与网页开发

本项目使用`Vue3.0`进行开发，使用`yarn`进行包管理
要部署本地开发环境，请先安装较新版的`Node`

1. **Fork**并**Clone**代码到本地
2. 进入代码目录，运行`yarn`以安装依赖项目
3. 开启本地开发服务器，运行`yarn serve`，这将会在`localhost:8080`启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果，并自动检查`json`中相关文件的使用情况
4. 要编译可供部署的文件，请运行`yarn build`，这将会在`dist`目录下生成可以直接部署到静态网站托管(GitHub Pages等)或服务器的文件

### 使用模板

若想使用网站模板开发新的语音按钮，可以选择以下两种方式:
- 修改`public`和`setting`目录下的文件以及`package.json`
  - 若使用该项目为模板进行开发，请务必修改或删除`setting/setting.json`里用于访问统计的**GA_ID**
- 使用[voices-button-cli](https://github.com/blacktunes/voices-button-cli)命令行工具(开发中)

### 计划中功能
- ~~表情包搜索~~
- ~~直播通知~~
- ~~动态展示~~

### LICENSE
若使用了本项目为**范本**开发项目或使用了项目代码请在**明显位置**声明**原作者**(https://github.com/blacktunes) 以及**本仓库**(https://github.com/blacktunes/hiiro-button).