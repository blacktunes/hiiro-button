# 猫猫按钮 / Hiiro按钮 / Hiiro Button

##### 项目地址: https://hiiro.club/

### 相关链接：
- [Hiiro的Bilibili直播间](https://live.bilibili.com/21919321)

### 参与完善本项目

- 您可以在[Issues](https://github.com/blacktunes/hiiro-button/issues)提出您的建议。
  - 若是请求添加新语音，请使用指定的**issues模板**，不熟悉github的用法也可以到[B站](https://space.bilibili.com/1384118)和我联系

- 如果您可以进行开发，那么请**Fork**本项目进行修改，完成修改后在本项目中发起一个**Pull Request**，详细说明请查看以下条目

### 添加或修改音频/完善翻译

音频文件推荐使用**mp3**格式，推荐先音量标准化，音频文件请放到`public/voices/`目录

所有的音频信息都存储在`src/setting/translate/voices.json`中，**添加或修改音频信息**、**完善翻译**，你同样需要修改这个文件中对应的内容

- 添加`usePicture`字段可以添加鼠标悬浮时显示的表情包

- 添加`mark`字段可以添加音频出处信息

- `voices.json`可以使用[button-tool](https://github.com/blacktunes/button-tool)(https://button-tool.vercel.app)进行编辑(功能尚未完善)

`voices.json`结构示例如下：
```json
{
  // 语音分类列表
  "category": [
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
  ],
  // 语音列表
  "voices": [
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
}
```

### 参与网页开发

本项目使用`Vue3.0`进行开发，使用`yarn`进行包管理
要部署本地开发环境，请先安装较新版的`Node`

1. **Fork**并**Clone**代码到本地
2. 进入代码目录，运行`yarn`以安装依赖项目
3. 开启本地开发服务器，运行`yarn serve`，这将会在`localhost:8080`启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果
4. 要编译可供部署的文件，请运行`yarn build`，这将会在`dist`目录下生成可以直接部署到静态网站托管(GitHub Pages等)或服务器的文件

### 使用模板

若想使用网站模板开发新的语言按钮，可使用[voices-button-cli](https://github.com/blacktunes/voices-button-cli)命令行工具(开发中)
