---
tags:
  - AI
  - AI/大语言模型/Diffusion/StableDiffusion
  - 索引/资源列表
  - 分类/收集箱
  - AI/绘画
  - AI/AIGC
---
# MultiDiffusion with Tiled VAE 

## 用于 sd-webui 的 Tiled Diffusion 和 VAE 扩展

### StableDiffusion

该插件可以大幅减少SD运算的时候所需显存，相当于是连续画多张图，再合并起来。这种拆分任务的方式让显存较小的硬件也能够低成本地画出更大的图。

同时，由于这个特性，让MultiDiffusion with Tiled VAE甚至能够在参数不变的情况下将原图从1024 * 800 放大到 4096 * 3200。


[MultiDiffusion with Tiled VAE ](https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111)
