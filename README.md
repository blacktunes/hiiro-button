# 猫猫按钮 / Hiiro 按钮 / Hiiro Button

![https://t.bilibili.com/97236535?type=2](https://cdn.jsdelivr.net/gh/blacktunes/hiiro-button@master/public/img/hiiro.png)

### Hiiro...Hiiro...寂しい

 - https://hiiro.club/

### 相关链接：

- [Hiiro 的 Bilibili 直播间](https://live.bilibili.com/21919321)

### 参与完善本项目

- 您可以在[Issues](https://github.com/blacktunes/hiiro-button/issues)提出您的建议。

  - 若是请求添加新语音，请使用指定的**issues模板**
  - 不熟悉**github**的用法也可以到[Bilibili](https://space.bilibili.com/1384118)和我联系

- 如果您可以进行开发，那么请**Fork**本项目进行修改，完成修改后在本项目中发起一个**Pull Request**，详细说明请查看以下条目
  > **Pull Request**请提交至**dev**分支

### 添加或修改音频/完善翻译

音频文件推荐使用**mp3**格式，请先音量标准化，然后放入`public/voices/`目录

所有的分类和音频信息都存储在`setting/translate`目录的`json`文件中，**添加或修改音频信息**、**完善翻译**，你需要修改对应文件中的内容

`locales.json`和`category.json`分别为 UI 界面翻译和分类信息，请不要修改文件名，语音信息可以使用除此外的任意名称，可使用多个`json`文件方便管理语音

可使用`schema`文件夹中的`json`文件增加`json schema`约束和代码提醒

`category.json`结构示例如下：

```jsonc
[
  {
    // 分类命名
    "name": "名言",
    // 是否隐藏
    "hide": true,
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

```jsonc
[
  {
    // 语音命名
    "name": "baba",
    // 语音文件名
    "path": "baba.mp3",
    // 是否隐藏
    "hide": true,
    "translate": {
      // 语音中文翻译
      "zh-CN": "米娜我是你爸爸",
      // 语音英语翻译
      "en-US": "I'm your Baba"
    },
    // 语音所属分类(对应category的name)
    "category": "名言",
    // 以下属性为可选
    // hover时显示图片，请放到public/voices/img目录
    "usePicture": {
      "zh-CN": "",
      "en-US": ""
    },
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

### 使用模板

若想使用网站模板开发新的语音按钮，可以选择以下两种方式:

- 使用模板[模板项目](https://github.com/blacktunes/voices-button)修改
  - 修改`public`和`setting`目录下的文件以及`package.json`
- 使用[voices-button-cli](https://github.com/blacktunes/voices-button-cli)命令行工具生成项目

> 因为本项目含有非通用的代码以及访问统计，所以不推荐直接修改本仓库，若依然要使用，请注意：
>
> - 修改或删除**setting/setting.json**里用于访问统计的**GA_ID**

### LICENSE

- 项目使用**GPL-3.0**为基础开源协议
- 若使用了本项目为**范本**开发项目或使用了项目代码请在**明显位置**声明**原作者**(https://github.com/blacktunes) 以及**本仓库**(https://github.com/blacktunes/hiiro-button).
