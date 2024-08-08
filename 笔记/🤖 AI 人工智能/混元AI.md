---
tags:
  - AI/绘画
---

## 教你成为炼丹师AI生图入门指南
### 仿 Novel Al prompt 形式
标签顺序:主体(1boy/1girl) ->角色名 (a girl named frieren from sousou no frierenseries) ->艺术家 (by xxx style)->race(elf)->镜头组合(cowboy shot)->风格(impasto style) ->画面主题 (fantasy theme) ->主环境描述 (in the forest, at day) ->背景描述 (gradient background)->动作 (sitting on ground)->表情 (isexpressionless)->主要角色特征(white hair)->身体特征(twintails,green eyes,parted lip) ->衣着特征 (wearing a white dress)->饰品 (frils)->其他附属物(a cat)>次要场景(grass,unshine)->美学 (beautifu color, detailed, aesthetic) -> 质量词(best quality)
提示词token控制在255以内

### 中文自然语言形式
*常规短句格式即可* 形如:一个拥有樱花粉渐变长发、明亮星眸、穿着精致水手服的动漫女孩正在蹲着喂猫

#### 中文tag形式
常规提示词格式即可，形如:1个女孩，动漫风格，樱花粉发色，渐变发色，星光熠熠的
眼睛，水手服，精致装扮，蹲下，喂猫中.

## 打标签工具
英文比较多比较完善，最近有微软发布新，中文的

## 环境部署
### 根据官方环境指引安装必要的文件和依赖:
官方项目地址:https://github.com/Tencent/HunyuanDiT 从官方项目中克隆后依照其指引安装环境，建议使用linux
系统，同时确保gcc和cuda等版本满足环境编译需求

`#1.Prepare conda environment`
`conda env create f environment.yml`
`#2.Activate the environment`
`conda activate HunyuanDiT`
`#3.Install pip dependencies`
`python -m pip install -r requirements.txt`
`#4.Install flash attention v2 for acceleration(reguires CUDA 11.6 or above)`
`python -m pip install git+https://github.com/Dao-AILab/flash-attention.git@v2.1.2.post3`

### 下载模型
从官方huggingface库下载训练所需要的模型权重，包括文本编码器和DiT权重，放到项目目录下指定CKPT文件夹中