(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{499:function(a,s,e){"use strict";e.r(s);var r=e(14),t=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("SpringBoot项目部署方式分为两种：")]),a._v(" "),e("ol",[e("li",[a._v("将项目打包成war包，部署到服务器上的tomcat服务器中")]),a._v(" "),e("li",[a._v("将项目打包成可执行jar包，然后将jar包上传至服务器上，然后"),e("code",[a._v("java -jar")]),a._v(" 执行")])]),a._v(" "),e("p",[a._v("Docker的发展给SpringBoot项目部署带了一种新的部署方式——容器化部署")]),a._v(" "),e("p",[a._v("容器化部署是将可执行jar包放到Docker中运行，主要有两种方式。")]),a._v(" "),e("h2",{attrs:{id:"方式一-直接构建jar包运行的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式一-直接构建jar包运行的镜像"}},[a._v("#")]),a._v(" 方式一：直接构建jar包运行的镜像")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("将项目打包，上传至服务器指定目录")])]),a._v(" "),e("li",[e("p",[a._v("在该目录下构建Dockerfile文件")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" Dockerfile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("Dockerfile写入如下指令")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("FROM java:8\nMAINTAINER demo\nADD demo-0.0.1-SNAPSHOT.jar demo.jar\nEXPOSE "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\nENTRYPOINT "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java"')]),a._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-jar"')]),a._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo.jar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("其中指令的含义：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("FROM：基础镜像，"),e("code",[a._v("FROM java:8")]),a._v(" 指的是拉取一个jdk1.8的镜像")])]),a._v(" "),e("li",[e("p",[a._v("MAINTAINER：作者，"),e("code",[a._v("MAINTAINER demo")]),a._v(" 作者是demo")])]),a._v(" "),e("li",[e("p",[a._v("ADD：将打包的可执行jar包复制到镜像中并重命名（用 COPY 也可），"),e("code",[a._v("ADD demo-0.0.1-SNAPSHOT.jar demo.jar")]),a._v("将demo-0.0.1-SNAPSHOT.jar 复制到镜像中并重命名为 demo.jar\nEXPOSE: 声明端口")])]),a._v(" "),e("li",[e("p",[a._v("ENTRYPOINT ： 容器启动之后执行的命令，"),e("code",[a._v("java -jar demo.jar")]),a._v(" 即启动jar")])])])]),a._v(" "),e("li",[e("p",[a._v("创建好Dockerfile文件后，执行命令"),e("strong",[a._v("构建镜像")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker build -t demo "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("strong",[a._v("注意")]),a._v("：demo后空格，再加上"),e("code",[a._v(".")]),a._v("，")]),a._v(" "),e("p",[a._v("注意最后的 "),e("code",[a._v(".")]),a._v(" 表示Dockerfile在当前文件目录下。demo表示构建的镜像，构建成功后可以使用"),e("code",[a._v("docker images")]),a._v("命令查看镜像。")])]),a._v(" "),e("li",[e("p",[a._v("镜像构建成功后就可以运行容器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -d --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always --name demo -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 demo\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中参数的含义：")]),a._v(" "),e("ul",[e("li",[a._v("-d ：后台运行容器，并返回容器ID")]),a._v(" "),e("li",[a._v("–restart=always ：容器在停止或服务器开机之后会自动重新启动")]),a._v(" "),e("li",[a._v("-p ：指定端口映射，第一个8080指的是宿主机上的端口，第二个8080指的是jar包内tomcat的端口")]),a._v(" "),e("li",[a._v("最后的demo指定镜像")])])]),a._v(" "),e("li",[e("p",[a._v("容器启动后可以使用"),e("code",[a._v("docker ps")]),a._v("命令查看启动的容器")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("docker logs --tail 300 -f 容器id")]),a._v("，可以查看容器服务的日志")])]),a._v(" "),e("li",[e("p",[a._v("如果想更新jar包，只需要使用"),e("code",[a._v("docker cp demo-0.0.1-SNAPSHOT.jar 容器ID:/demo.jar")]),a._v("，就可以将demo-0.0.1-SNAPSHOT.jar拷贝进容器并重命名，然后 "),e("code",[a._v("docker restart 容器ID")]),a._v(" 重启容器。")])])]),a._v(" "),e("h2",{attrs:{id:"方式二-基于jdk镜像运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式二-基于jdk镜像运行容器"}},[a._v("#")]),a._v(" 方式二：基于JDK镜像运行容器")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在服务器中拉取jdk1.8的镜像")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull jdk8\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("创建目录，并将jar包上传至该目录")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /server/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" deploy/jar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("运行容器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /server/deploy/jar:/jar\n-v /server/logs/demo:/mnt/logs/demo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--name demo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\njdk8 /usr/bin/java -jar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-Duser.timezone"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GMT+08 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n/jar/demo-1.0.jar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("命令说明：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-Duser.timezone")]),a._v(" ：指定时区")]),a._v(" "),e("li",[e("code",[a._v("jdk8 /usr/bin/java -jar")]),a._v(" ：执行jar包")]),a._v(" "),e("li",[e("code",[a._v("/jar/demo-1.0.jar")]),a._v(" ：指定需要执行的jar包的位置。")])])]),a._v(" "),e("li",[e("p",[a._v("以后发布，只需要把宿主机目录里的jar包替换掉，重启容器。")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);