---
tags:
  - AI/绘画
---

## 数据处理
#### 数据准备
需要数据图片以及对应数据文件路径和数据标签的csv进行一个基础的数据准备操作，csv文件
格式如‘
一只蓝色的鸟儿站在蓝色的花瓶上，周国点缀着自色花朵，背最是自色
/dataset/po
青花瓷风格
，这是一幅蓝白相间的陶瓷盘子，上面描绘着一只狐狸和它的幼崽在森林中漫步，背景是白色
/dataset
.青花瓷风格，
在黑色背最上，
一只蓝色的狼站在蓝白相间的盘子上，周围是树木和月亮，
/dataset
，这风格
在蓝色背景上，
只蓝色蝴蝶和自色花朵被放置在中央，
/dataset/oorcelain
风格
在蓝色的盘子上，
，一只白狼在夜晚的森林中嚎叫，背最是月光下的森林，
/dataset/oorce
花瓷风格
23风东
在蓝色的背景上，一只蓝色的蝴蝶和许多自色的花朵组成了一插画
/dataset
姿风格
在白色背景上，
一只蓝色的鸟和官的家人坐在树枝上，因围是蓝色的花朵
/dataset
吉花瓷风格
这是一只蓝自相间的狗，它在蓝自相间的盘子上，背是是自色的，
datase
在蓝色森林中，
一只狐狸和几只鹿在奔跑，周国是茂密的树林和清的河流，背景是森林，
/dataset
Png,青花瓷风格，
/dataset/porc
/9.Png,青花瓷风格，
在白色背景上，
有三只蓝色的鸟儿坐在树枝上，周国是蓝色的花和自色的叶子，
/images/10.png,青花瓷风格
只蓝白相间的狼在月亮和星星的映衬下，站在山丘上，背绿是蓝色的月亮和星星
/dataset/norcelain
#### 数据压制
官方使用arrow进行训练的文件读取，因此需要对数据文件进行一个压制

## 参数选择
### 模型选择
在模型的选择上推荐使用1.2版本的模型进行训练，1.2版本的架构不同于1.0和1.1版本，其删
除了条件部分的网络
### 分辨率选择
官方可以使用单分辨率和多分辨率的训练模式，我们的训练使用的是多分辨率训练
### 学习率选择
可以使用官方默认的学习率1e-4，也可以根据自己训练的其他参数比如batch size和ema等进
行额外的灵活调整

## 参数选择
####  Deepspeed
根据自身显卡的实际显存情况选择合适的 stage 进行显存优化，我们在A800上使用了 zero1
进行了一部分显存的优化
其他参数选择
下图是训练加速的其他参数，官方的项目文件中有对所有训练参数的介绍，具体可以翻阅项目
代码
`cceleration`
`parser.add_argument("--use-flash-attn", action="store_true", help="During training,`
`"flash attention is used to accelerate training.")`
`parser.add argument("--no-flash-attn",dest="use_flash attn", action="store false",`
`help="During training, flash attention is not used to accelerate training.")`
`type=int, default=1, help="Use AngelPTM zero stage. Support 2 and 3")`
`parser.add`
`argument("--use-zero-stage",`
`parser.add_ argument("--grad-accu-steps", type=int, default=1, help="Gradient accumulation steps.")`
`parser.add argument("`
`gradient-checkpointing",action="store true",help="Use gradient checkpointing.")`
`parser.add argument("`
`-cpu-offloading",action="store true",`
`help="Use cpu offloading for parameters and optimizer states.")`
`parser.add argument("`
`save-optimizer-state",action="store true",`
`help="Save optimizer state in the checkpoint.")`
## 训练过程
### 训练流程
数据主要来自互联网，对数据进行了一定规则的清洗后选择了73w+60w+90w+30w的数据进行分批次训练，，对一张图我们有五种不同的标签构造，在训练过程中随机选择
### 训练标签
张图我们有五种不同的标签构造，在训练过程中随机选择，同时我们在训练中会对角色英文名称进行随机的中文对一替换，以及对一些额外标签比如年份标签，元数据标签进行一个随机小概率的删除
