# 后台前端开发文档

## 1. 概述

### 1.1. 依赖说明
1. 操作系统
> 并无特殊要求，但以体验上来说，Linux/Unix 优于 Windows
2. NodeJS
> 请到[NodeJS](https://nodejs.org/en/)下载最新版进行安装。

```bash
# 安装完成后，打开CMD/Terminal，运行
node -v # 查看node版本，检查是否正常安装
npm -v  # 查看对应的node包管理器版本

```
3. cnpm安装
> 由于npm使用国外资源，所以稳定性不佳。请用cnpm替换npm作为node的包管理器。详情请看:[cpm](https://npm.taobao.org/)

```bash
npm install cnpm -g # 安装cnpm
```
4. gulp安装
> gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，而且大大提高我们的工作效率。

```bash
cnpm install gulp -g # 安装Gulp
```


4. bower安装
>  bower是前端资源管理工具，如JQueryJS， AngularJS等等都是通过bower下载安装。

```bash
cnpm install bower -g # 安装Gulp
```

5. 项目依赖安装
> 在项目根地址执行，如下命令进行安装即可。

```bash
bower install # 安装前端依赖
# 此过程中，会询问需要安装的AngularJS版本号，请选择1.4.8版本即可。

cnpm install  # 安装工具依赖
```

***At last:***
由于项目用到scss，对其进行编译需要node-sass这个这个组件，底层依赖Python，所以在Windows环境下，需要安装[Python](https://www.python.org/)

### 1.2 命令

* gulp build
> 打包前端代码主要作用如下：
1. 把.src/app目录下的JS扫描出来，并注入到html文件中。
2. 对JS文件进行合并，压缩。
3. 对SCSS文件进行编译，压缩。


* gulp serve
> 启动服务器，以便可以在浏览器访问开发

### 1.3 目录结构说明
目录结构及说明如下:

```
.
├── src                                // 项目编写源码位置
│   ├── app                            // 除SCSS外的代码位置，按业务类型划分文件
│   │   ├── base                       // 基础模块文件夹，定义基础的配置
│   │   │   ├── config                 // 基础的配置，如国际化配置
│   │   │   ├── filter                 // 基础的过滤器配置
│   │   │   ├── services               // 基础服务，不依赖除Angularjs API之外的任何服务
│   │   │   ├── utils                  // 基础工具类，如fetchUtil,validateUtil等
│   │   │   ├── base.constants.js      // 基础的常量配置
│   │   │   └── base.module.js         // 基础模块的定义
│   │   ├── pages                      //页面的代码文件,  如果还有子页面/模块，应该在对应的目录下创建子目录
│   │   │   ├── dashboard              // 以首页为例
│   │   │   │   ├──noticeList          // 公告模块
│   │   │   │   │   ├── noticeList.directive.js   // 公告模块指令
│   │   │   │   │   ├── noticeList.service.js     // 公告模块服务
│   │   │   │   │   ├── noticeList.ctrl.js        // 公告模块控制器
│   │   │   │   │   ├── noticeList.html           // 公告模块页面
│   │   │   │   └── dashboard.module.js           // 首页页面定义
│   │   │   └── page.module.js                    // 页面模块的定义
│   │   ├── theme                                 // 有关主题的代码
│   │   │   ├── components                        // 与主题有关的组件，如，header, sidebar用于页面的显示
│   │   │   │   ├── backTop                       // 回到顶部的按钮
│   │   │   │   ├── baPanel                       // 面板
│   │   │   │   ├── baSidebar                     // 菜单
│   │   │   │   ├── baWizard                      // 向导
│   │   │   │   ├── contentTOp                    // 每个页面内容的顶部
│   │   │   │   ├── noData                        // 当列表无数据时显示
│   │   │   │   ├── pageTop                       // 页面的顶部
│   │   │   │   ├── widgets                       // 插件
│   │   │   │   └──components.module.js           
│   │   │   ├── directive                         // 与主题有关的指令，与组件类似，只是不需要html定义，如 <input> 的auto-focus
│   │   │   ├── filters                           // 主题的过滤器
│   │   │   ├── services                          // 主题的服务，提供比如，查看当前菜单是否收缩的服务
│   │   │   ├── theme.config.js                   // 主题的配置
│   │   │   ├── theme.constants.js                // 主题常量的配置
│   │   │   ├── theme.run.js                      // 主题启动时运行
│   │   │   ├── theme.service.js                  // 主题主服务
│   │   │   └── theme.module.js                   //  主题模块定义
│   │   └── app.js                              　// 程序主入口
│   ├── assets                                    // 纯静态文件目录
│   │   ├── fonts                                 // 字体目录
│   │   └── img                                   // 图片目录
│   ├── sass                                      // Sytles的代码位置,目结构与app类似
│   ├── index.html
│   ├── 404.html
│   ├── reg.html
│   └── auth.html
├── gulp          // 具体gulp任务配置
├── .jshintrc     // JS风格检测文件
├── .stylelintrc  // SASS风格检测配置
├── bower.json    // 前端依赖配置文件
├── gulpfile.js   // gulp配置主文件
└── package.json  // 项目依赖配置文件
```
> 所有的模块应该以业务进行划分，每个模块应该按 module, directive, service, controller,template(即html) config, run等进行编写(有则写，无则不需要)

## 2. 详细说明

### 2.1 AngularJS详述

#### 2.1.1 what  is angularjs ?

AngularJS是一个 MV* 框架，最适于开发客户端的单页面应用。它不是个功能库，而是用来开发动态网页的框架。它专注于扩展HTML的功能，提供动态数据绑定（data binding），而且它能跟其它框架（如jQuery）合作融洽。


#### 2.1.2 AngularJS应用的解析
本节描述AngularJS应用程序的三个组成部分，并解释它们如何映射到模型-视图-控制器设计模式：

##### 模板（Templates）

模板是您用HTML和CSS编写的文件，展现应用的视图。 您可给HTML添加新的元素、属性标记，作为AngularJS编译器的指令。 AngularJS编译器是完全可扩展的，这意味着通过AngularJS您可以在HTML中构建您自己的HTML标记！

##### 应用程序逻辑（Logic）和行为（Behavior）

应用程序逻辑和行为是您用JavaScript定义的控制器。AngularJS与标准AJAX应用程序不同，您不需要另外编写侦听器或DOM控制器，因为它们已经内置到AngularJS中了。这些功能使您的应用程序逻辑很容易编写、测试、维护和理解。

##### 模型数据（Data）

模型是从AngularJS作用域对象的属性引申的。模型中的数据可能是Javascript对象、数组或基本类型，这都不重要，重要的是，他们都属于AngularJS作用域对象。

AngularJS通过作用域来保持数据模型与视图界面UI的双向同步。一旦模型状态发生改变，AngularJS会立即刷新反映在视图界面中，反之亦然。

此外，AngularJS还提供了一些非常有用的服务特性：
* 底层服务包括依赖注入，XHR、缓存、URL路由和浏览器抽象服务。
* 您还可以扩展和添加自己特定的应用服务。
* 这些服务可以让您非常方便的编写WEB应用。

#### 2.1.2 Angular的概念

#####  1. module

AngularJS是一种以模块开发为理念的框架, 每个页面、功能都需要定义一个模块语法如下:
```javascript
angular.module('PC.admin.theme',[]);
angular.module('PC.admin',['PCAdmin.thme']);
```
通过调用anuglar.module，声明一个模块，[] 声明模块需要依赖的模块。模块的作用：

1. 被其它的模块引用
2. 被HTML引用。如下所示：
```html
<!DOCTYPE html>
<html ng-app="pc.admin">
  <head>
  </head>
  <body>
  </body>
</html>
```
ng-app指令标记了AngularJS脚本的作用域，在<html>中添加ng-app属性即说明整个<html>都是AngularJS脚本作用域。开发者也可以在局部使用ng-app指令，如<div ng-app>，则AngularJS脚本仅在该<div>中运行。
此示例说明此页面使用了PC.Admin这个模块。

##### 2. directive

一个指令用来引入新的HTML语法。指令是DOM元素上的标记，使元素拥有特定的行为。举例来说，静态的HTML不知道如何来创建和展现一个日期选择器控件。让HTML能识别这个语法，我们需要使用指令。指令通过某种方法来创建一个能够支持日期选择的元素。

一个Angular指令可以有以下的四种表现形式：
1. 一个新的HTML元素（<data-picker></data-picker>）
2. 元素的属性（<input type=”text” data-picker/>）
3. CSS class（<input type=”text” class=”data-picker”/>）
4. 注释（<!–directive:data-picker –>）

当然，我们可以控制我们的指令在HTML中的表现形式。下面我们来看一下AngularJS中的一个典型的指令的写法。指令注册的方式与 controller 一样，但是它返回的是一个拥有指令配置属性的简单对象(指令定义对象) 。下面的代码是一个简单的 Hello World 指令。
```javascript
var app = angular.module('pc.admin', []);
app.directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});
```
在上面的代码中，app.directive()方法在模块中注册了一个新的指令。这个方法的第一个参数是这个指令的名字。第二个参数是一个返回指令定义对象的函数。如果你的指令依赖于其他的对象或者服务，比如 $rootScope, $http, 或者$compile，他们可以在这个时间被注入。这个指令在HTML中以一个元素使用，如下：

```html
<hello-world/>
//OR
<hello:world/>
```
或者，以一个属性的方式使用：
```html
<div hello-world></div>
//OR
<div hello:world/>
```
***注意***： 在匹配指令的时候，Angular会在元素或者属性的名字中剔除 x- 或者 data- 前缀。 然后将 – 或者 : 连接的字符串转换成驼峰(camelCase)表现形式，然后再与注册过的指令进行匹配。这是为什么，我们在HTML中以 hello-world 的方式使用 helloWorld 指令。其实，这跟HTML对标签和属性不区分大小写有关。 尽管上面的指令仅仅实现了静态文字的显示，但是这里还是有一些有趣的点值得我们去挖掘。我们在指令定义过程中使用了三个属性来配置指令。我们来一一介绍他们的作用。

* restrict – 这个属性用来指定指令在HTML中如何使用（还记得之前说的，指令的四种表示方式吗）。在上面的例子中，我们使用了 ‘AE’。所以这个指令可以被当作新的HTML元素或者属性来使用。如果要允许指令被当作class来使用，我们将 restrict 设置成 ‘AEC’。
* template – 这个属性规定了指令被Angular编译和链接（link）后生成的HTML标记。这个属性值不一定要是简单的字符串。template 可以非常复杂，而且经常包含其他的指令，以及表达式({{ }})等。更多的情况下你可能会见到 templateUrl， 而不是 template。所以，理想情况下，你应该将模板放到一个特定的HTML文件中，然后将 templateUrl 属性指向它。
* replace – 这个属性指明生成的HTML内容是否会替换掉定义此指令的HTML元素。在我们的例子中，我们用 <hello-world></hello-world>的方式使用我们的指令，并且将 replace 设置成 true。所以，在指令被编译之后，生成的模板内容替换掉了 <hello-world></hello-world>。最终的输出是 <h3>Hello World!!</h3>。如果你将 replace 设置成 false，也就是默认值，那么生成的模板会被插入到定义指令的元素中。
* Link指令定义对象中的link属性配置
  * scope – 指令的scope。在我们的例子中，指令的scope就是父controller的scope。
  * elem – 指令的jQLite(jQuery的子集)包装DOM元素。如果你在引入AngularJS之前引入了jQuery，那么这个元素就是jQuery元素，而不是jQLite元素。由于这个元素已经被jQuery/jQLite包装了，所以我们就在进行DOM操作的时候就不需要再使用 $()来进行包装。
  * attr – 一个包含了指令所在元素的属性的标准化的参数对象。举个例子，你给一个HTML元素添加了一些属性：，那么可以在 link 函数中通过 attrs.someAttribute 来使用它


##### 3. services
Service就是【单例对象】在AngluarJS 中的一个别名。单例对象会被经常传来传去，保证你每次访问到的都是同一个实例，这一点和工厂模式不同。基于这种思想，单例对象可以让很多controller和directive访问内部的数值。
```javascript

(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('noticeService', noticeService);

  /** @ngInject */
  function noticeService(fetchUtil, $q) {
    var viewNotice = function () {}
    var loadNoticeList = function (params) {
      var defer = $q.defer();
      fetchUtil.jsonp('notice/getNoticeInfoList.do', params).then(function (data) {
        defer.resolve(data);
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      viewNotice: viewNotice,
      loadNoticeList: loadNoticeList
    };
  }
})();
```
在这个例子里，我们写了一个有关公告的服务，它的作用主要是向后台查询公告列表。
##### 4. controller

controller应该纯粹地用来把service、依赖关系、以及其它对象串联到一起，然后通过scope把它们关联到view上。如果在你的 视图里面需要处理复杂的业务逻辑，那么把它们放到controller里面也是一个非常不错的选择。
```javascript
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('noticeListCtrl', noticeListCtrl)
    .controller('noticeDetailCtrl', noticeDetailCtrl);
  /** @ngInject */
  function noticeListCtrl($scope, noticeService, userService, $uibModal) {
    $scope.noticeList = [];
    noticeService.loadNoticeList({
      joinUserId: userService.getUser().userId
    }).then(function (data) {
      $scope.noticeList = data.resultList;
    });
  }
})();
```
这个contoller引用了之前的公告服务，并向后台查询了公告列表，

##### 5. template(html)
在AngularJS中，把HTML当作视图(View)来使用，一个视图通过ng-controller与controller进行相关联。其数据绑定与controller的$scope的子属性相关联。

```html
<table class="table notice-list">
    <tr ng-repeat="row in noticeList" ng-class="[classList[$index%4]]" ng-click="showNoticeDetail(row)">
        <td><span class="fa fa-bell"></span></td>
        <td>{{row.NOTICE_DESC}}</td>
        <td>
          <span class="fa clickable" ng-class="{'fa-envelope':row.IS_VISIT==0,'fa-inbox':row.IS_VISIT!=0}"></span>
        </td>
    </tr>
</table>
```
这个例子与上个controller例子是对应的。当controller调用了services的服务后，赋值于$scope.noticeList，html通过ng-repeat对$scope.noticeList进行遍历生成table。

##### 6. Route
AngularJS路由功能是一个纯前端的解决方案，与我们熟悉的后台路由不太一样。后台路由，通过不同的URL会路由到不同的控制器上(controller)，再渲染(render)到页面(HTML)。AngularJS的前端路由，需求提前对指定的(ng-app)，定义路由规则(routeProvider)，然后通过不同的URL，告诉(ng-app)加载哪个页面(HTML)，再渲染到(ng-app)视图(ng-view)中。

AngularJS的前端路由，虽然URL输入不一样，页面展示不一样，其实完成的单页(ng-app)视图(ng-view)的局部刷新。这样来看，AngularJS做单页应用就有点标配的感觉了。

##### 7.总结
一个AngularJS的应用以Module开头，之后的Service, Contorller, directive 托管于这个模块。在directive 中，可以使用 Controller, Controller使用Service.

***注意：*** controller是用于view的更新，但只能操作数据，不能直接操作DOM，如: $('#id').remove(); 不应该出现在controller 中，只能出现在directive 中。

---
参考:
* [AngularJS路由和模板](http://blog.fens.me/angularjs-route-template/)
* [angular-phonecat-book-zhcn](https://xdsnet.gitbooks.io/angular-phonecat-book-zhcn/content/chapter0/chapter0.html)
* [AngularJS 指令实践指南1](http://blog.jobbole.com/62249/)
* [AngularJS 指令实践指南2](http://blog.jobbole.com/62999/)

### 2.2 有关SASS
Sass 是对 CSS 的扩展，让 CSS 语言更强大、优雅。 它允许你使用变量、嵌套规则、 mixins、导入等众多功能， 并且完全兼容 CSS 语法。

参考：[SASS参考手册](http://sass.bootcss.com/docs/sass-reference/)


### 2.3 前端依赖说明
前端的依赖写在bower.json内，以下说明每个组件的用处

```javascript
 "dependencies": {
    "Ionicons": "ionicons#~2.0.1",                      // 系统图标依赖
    "angular": "~1.4.8",                                // angularjs
    "angular-cookies": "~1.4.8",                        // angular 操作cookie模块
    "angular-route": "~1.4.8",                          // angular 路由模块
    "angular-slimscroll": "~1.1.5",                     // 滚动条样式模块
    "angular-smart-table": "~2.1.3",                    // 列表模块
    "angular-toastr": "~1.7.0",                         // 消息提示模块
    "angular-touch": "~1.4.6",                          // 支持触摸模块
    "angular-validation": "1.4.1",                      // 表单校验
    "angular-form-for": "^4.1.12",                      // 表单校验
    "angular-ui-sortable": "~0.13.4",                   // 自动排序
    "angular-bootstrap": "~0.14.3",                     // angular 引用boostrap 组件
    "angular-animate": "~1.4.8",                        // angular 动画样式
    "angular-progress-button-styles": "~0.1.0",         // 进度条
    "angular-ui-router": "~0.2.16",                     // ui路由
    "animate.css": "~3.4.0",                            // angular 动画样式基础库
    "bootstrap": "~3.3.5",                              // boostrap
    "bootstrap-select": "~1.9.3",                       // bootstrap select
    "bootstrap-switch": "~3.3.2",                       // bootstrap 开关样式组件
    "bootstrap-tagsinput": "~0.5.0",                    // bootstrap 标签式输入组件
    "font-awesome": "fontawesome#~4.4.0",               // 字体图标
    "fullcalendar": "~2.4.0",                           // 日历组件
    "highlight": "~8.8.0",                              // 图表
    "jquery": "~2.1.4",                                 // JQuery
    "jquery-ui": "~1.11.4",
    "jquery.easing": "~1.3.1",
    "moment": "~2.10.6",                                // 增强时间操作
    "slimScroll": "jquery-slimscroll#~1.3.6",           // angular-slimscroll 依赖的
    "textAngular": "~1.4.6",                            // 富文本输入
    "angular-xeditable": "~0.1.9",                      // 富文本输入
    "ng-js-tree": "~0.0.7",                             // 树形组件
    "echarts": "https://github.com/ecomfe/echarts.git"  // 图表
  },

```

## 3. 如何开发

### 3.1 增加子页面

在src/app/pages下新建子目录如: examplesPages, 并在此目录下创建

1. examplesPages.module.js

```javascript
/**
 * @author lgc
 */
(function () {
  'use strict';
  angular.module('PCAdmin.pages.examplesPages', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('examplesPages', {
        url: '/examplesPages',
        templateUrl: 'app/pages/examplesPages/examplesPages.html',
        controller: 'examplesPagesCtrl',
        controllerAs: 'vm',
        title: '示例页面',
        sidebarMeta: {
          icon: 'fa fa-usd',
          order: 6
        }
      });
  }
})();
```

2. examplesPages.html
```html
<div ba-panel ba-panel-class="with-scroll">

</div>
```
3. examplesPages.ctrl.js
```javascript
/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.examplesPages')
    .controller('examplesPagesCtrl', examplesPagesCtrl);

  /** @ngInject */
  function examplesPagesCtrl($scope, examplesPagesService) {

  })();
```
4. examplesPages.service.js
```javascript
(function () {
  'use strict';
 /** @ngInject */
angular.module('PCAdmin.pages.examplesPages').factory('examplesPagesService', function ($q, fetchUtil) {
    return {
      query: function (params) {
        var defer = $q.defer();
        fetchUtil.jsonp('adbms/examplesPagesService.do', params).then(function (data) {
          defer.resolve(data.resultList);
        }, function (data) {
          defer.reject(data);
        });
        return defer.promise;
      }
    };
  });
})();
```
增加页面后，请在page.module.js对其声明依赖后，即可在左侧菜单看到新的子页面。
```javascript
/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages', [
      'ui.router',
      'PCAdmin.pages.examplesPages'
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }
})();
```
自此，一个新的子页面出现了，页面根据业务来写业务代码即可。

### 3.2 增加主题组件
在src/theme/components/下增加对应的子目录如:exampleComponent,并在对应的目录下创建：
1. exampleComponent.directive.js
```javascript
(function() {
  'use strict';

  angular.module('PCAdmin.theme.components')
    .directive('exampleComponent', exampleComponent);

  /** @ngInject */
  function exampleComponent() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/exampleComponent/exampleComponent.html',
      controllerAs: '$exampleComponentCtrl',
      controller: 'exampleComponentCtrl'
    }
  }
})();
```
2. exampleComponent.html
```html
<div></div>
```
3. exampleComponent.ctrl.js
```javascript
(function() {
  'use strict';

  angular.module('PCAdmin.theme.components')
    .controller('exampleComponentCtrl', exampleComponentCtrl);

  /** @ngInject */
  function exampleComponentCtrl($scope) {
  }
})();
```
> 以上文件并不是必须的，有则需要写，无则不用。请严格按代码的功能进行分类，并让它处于应该出现的位置。

### 3.3 修改主题样式

1. 打开***src/sass/theme/conf/colorScheme/_dq.scss***, 对里面定义颜色的变量进行修改即可。
2. 打开***src/app/theme/theme.configProvider.js***,同样对里面定义颜色的变量进行修改

### 3.4 其他应该注意
#### 3.4.1 angular DI注入
是否注意到许多函数都有写:
```
  /** @ngInject */
```
因为angular把service等注入到controller有三种方式：
1. 通过contoller的变量名自动注入如:
```javascript
  function exampleComponentCtrl($scope) {
  }
```
2. 自己写注入
```
  angular.module('PCAdmin.theme.components')
    .controller('exampleComponentCtrl', ['$scope',exampleComponentCtrl]);

  /** @ngInject */
  function exampleComponentCtrl($scope) {
  }
```
3. 另外声明

```
  angular.module('PCAdmin.theme.components')
    .controller('exampleComponentCtrl', exampleComponentCtr);
  function exampleComponentCtrl($scope) {
  }
  exampleComponentCtrl.$inejct=['$scope']
```
在项目中，用的是第一种方式，但是，代码会被压缩的，会转成如下的代码：
```javascript
  function a(b) {
  }
```
此时angular无法再自动注入了，所以需要通过
```javascript
  /** @ngInject */
```
在build阶段把代码自动转成第二种方式。采用这样的方式可以让代码更加简洁。


## Change Log
* 2016-07-23 新建文档 by LGC
