---
tags:
  - 教学
---
# excel如何所有图片一键填充满单元格
## 手动排序
按照以下步骤操作：

>1. 首先，确保图片是嵌入到 Excel 工作表中的。
>2. 选中所有需要调整的图片。您可以通过按住 `Ctrl` 键并依次点击图片来逐个选择，或者如果图片分布比较规律，您可以拖动鼠标进行框选。
>3. 在选中图片后，右键单击其中一张图片，在弹出的菜单中选择“大小和属性”。
>4. 在“大小和属性”对话框中，切换到“属性”选项卡。
>5. 勾选“随单元格改变位置和大小”选项。
>6. 然后切换到“大小”选项卡，在“缩放比例”中，将“高度”和“宽度”都设置为 100%。

这样设置后，当您调整单元格大小时，图片就会自动填充满单元格了。
例如，如果您的单元格是长方形的，图片原本是正方形的，经过上述设置，图片会自动拉伸以适应单元格的形状和大小。
请注意，过度拉伸图片可能会导致图片失真，因此在操作前请确保这样的调整不会影响图片的显示效果。

## 已经排好序
`类似WPS中‘嵌入 单元格’`

使用VBA（Visual Basic for Applications）宏来实现。以下是一个简单的VBA宏代码，可以帮助你将工作表中的所有图片填充到各自的单元格中：

1. 按下 `Alt + F11` 打开VBA编辑器。
2. 插入一个新模块：点击 `Insert` > `Module`。
3. 将以下代码粘贴到模块中：
	## vba
	`Sub ResizePictures()     Dim ws As Worksheet     Dim pic As Picture     Dim cell As Range      ' 指定工作表     Set ws = ThisWorkbook.Sheets("Sheet1") ' 将 "Sheet1" 替换为你的工作表名称      For Each pic In ws.Pictures         ' 找到图片左上角所在的单元格         Set cell = ws.Cells(pic.TopLeftCell.Row, pic.TopLeftCell.Column)                  ' 调整图片大小以适应单元格         pic.Left = cell.Left         pic.Top = cell.Top         pic.Width = cell.Width         pic.Height = cell.Height     Next pic End Sub`

4. 关闭VBA编辑器，返回Excel。
5. 按下 `Alt + F8` 打开“宏”对话框。
6. 选择 `ResizePictures` 宏并点击“运行”。

这样，所有图片将自动调整大小并填充到各自所在的单元格中。如果你的图片不在 `Sheet1` 中，请将代码中的 `Sheet1` 替换为相应的工作表名称。