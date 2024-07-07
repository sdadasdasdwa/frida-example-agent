# frida-example-agent
Android应用实战，按此书章节顺序依次学习笔记与代码

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

**加粗 Ctrl+B**

_斜体 Ctrl+I_

~~删除线~~

***全部粗体和斜体***


你好，这里 <sub>下标是sub</sub>

你好，这里 <sup>上标是sup</sup>

>用>来引用文本

`引用符号是 Ctrl+E`

```
引用代码片段是3个Ctrl+E
```

在问题、拉取请求和讨论中，可以使用反引号在句子中标注颜色。 反引号内支持的颜色模型将显示颜色的可视化效果。
The background color is `#ffffff` for light mode and `#000000` for dark mode.

*Ctrl+K的用法是链接地址*This site was built using [GitHub Pages](https://pages.github.com/).

[readme.md](/README.md)

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](/image.png)

用-、*、+来创建一个无序列表

- 你好
* 我不好
+ 再见
1. 这是有序列表
2. 这是有序列表
3. 这是有序列表

**嵌套列表**

100. First list item
       - First nested list item
           - Second nested list item


**任务列表**

用法： - []中间可以加x代表任务是否完成
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

**脚注**

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

**警报**

有!NOT !TIP !IMPORTANT !WARNING !CAUTION

用法：> [!NOT]

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

<!-- This content will not appear in the rendered Markdown -->

## 使用表格组织信息
可以使用竖线 | 和连字符 - 创建表，可以在表格中使用格式，例如链接、内联代码块和文本样式。可以通过在标题行中连字符的左侧、右侧或两侧添加冒号 :，来靠左、靠右或居中对齐列中的文本。若要包含竖线 | 作为单元格中的内容，请在竖线前使用 \。
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

## 折叠部分
使用detail标签
<details>

<summary>Tips for collapsed sections</summary>

### You can add a header

You can add text within a collapsed section. 

You can add an image or a code block, too.

```ruby
   puts "Hello World"
```

</details>

## 代码块语法突出显示
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

## 创建关系图
可以使用以下三种不同的语法在 Markdown 中创建关系图：mermaid、geoJSON 和 topoJSON、ASCII STL。 关系图可在以下项中呈现：GitHub Issues、GitHub Discussions、拉取请求、Wiki 和 Markdown 文件。

### 创建 Mermaid 关系图
Mermaid 可以呈现流程图、序列图、饼图等。
Here is a simple 流程图:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


### 创建 GeoJSON 和 TopoJSON 地图
使用 GeoJSON，可以通过指定坐标来创建地图。
```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
              [-90,35],
              [-90,30],
              [-85,30],
              [-85,35],
              [-90,35]
          ]
        ]
      }
    }
  ]
}
```

使用 TopoJSON，可以通过指定坐标和形状来创建 TopoJSON 地图。
```topojson
{
  "type": "Topology",
  "transform": {
    "scale": [0.0005000500050005, 0.00010001000100010001],
    "translate": [100, 0]
  },
  "objects": {
    "example": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {"prop0": "value0"},
          "coordinates": [4000, 5000]
        },
        {
          "type": "LineString",
          "properties": {"prop0": "value0", "prop1": 0},
          "arcs": [0]
        },
        {
          "type": "Polygon",
          "properties": {"prop0": "value0",
            "prop1": {"this": "that"}
          },
          "arcs": [[1]]
        }
      ]
    }
  },
  "arcs": [[[4000, 0], [1999, 9999], [2000, -9999], [2000, 9999]],[[0, 0], [0, 9999], [2000, 0], [0, -9999], [-2000, 0]]]
}
```

### 创建 STL 3D 模型
```stl
solid cube_corner
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 1.0 0.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 1.0 0.0 0.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 1.0
      vertex 0.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.577 0.577 0.577
    outer loop
      vertex 1.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
endsolid
```

## 数学表达式

## 自动链接的引用



