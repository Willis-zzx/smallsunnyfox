(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{481:function(t,v,_){"use strict";_.r(v);var e=_(14),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"什么是元组-码-候选码-主码-外码-主属性-非主属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是元组-码-候选码-主码-外码-主属性-非主属性"}},[t._v("#")]),t._v(" 什么是元组,码,候选码,主码,外码,主属性,非主属性？")]),t._v(" "),_("p",[_("strong",[t._v("元组：")]),t._v(" 元组是关系型数据库中的基本概念，关系是一张表，表中的每行（即数据库中的每条记录）就是一个元组，每一列就是一个属性。在二维表中，元组也称为行。")]),t._v(" "),_("p",[_("strong",[t._v("码：")]),t._v(" 是能唯一标识实体的属性，对应表中的列。")]),t._v(" "),_("p",[_("strong",[t._v("候选码：")]),t._v(" 若关系中的某一属性或属性组的值能唯一的标识一个元组，而其他任何子集都不能再标识，则称该属性组为候选码。")]),t._v(" "),_("p",[_("strong",[t._v("主键：")]),t._v(" 主码也叫主键。主码是从候选码中选出来的。一个实体集中只能有一个主码，但可以有多个候选码。")]),t._v(" "),_("p",[_("strong",[t._v("外码：")]),t._v(" 外码也叫外键。如果一个关系中的一个属性是另外一个关系中的主码，则这个属性为外码。")]),t._v(" "),_("p",[_("strong",[t._v("主属性：")]),t._v(" 候选码中出现过的属性称为主属性。")]),t._v(" "),_("p",[_("strong",[t._v("非主属性：")]),t._v(" 不包含在任何一个候选码中的属性称为非主属性。")]),t._v(" "),_("h2",{attrs:{id:"主键和外键有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主键和外键有什么区别"}},[t._v("#")]),t._v(" 主键和外键有什么区别？")]),t._v(" "),_("p",[_("strong",[t._v("主键（主码）：")]),t._v(" 主键是用于唯一标识一个元组，不能有重复，不允许为空。一个表只能有一个主键。")]),t._v(" "),_("p",[_("strong",[t._v("外键（外码）：")]),t._v(" 外键用来和其他表建立联系用的，外键是另外一张表的主键，外键是可以有重复的，可以是空值，一个表可以有多个外键。")]),t._v(" "),_("h2",{attrs:{id:"数据库范式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库范式"}},[t._v("#")]),t._v(" 数据库范式")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("1NF（第一范式）：")])]),t._v(" "),_("p",[t._v("属性（对应于表中的字段）不能再被分割，也就是这个字段只能是一个值，不能再分为多个其他字段。")]),t._v(" "),_("p",[_("strong",[t._v("1NF是所有关系型数据库的最基本要求")]),t._v("，也就是说关系型数据库中创建的表一定满足第一范式。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("2NF（第二范式）：")])]),t._v(" "),_("p",[t._v("2NF在1NF的基础之上，消除了非主属性对于码的部分函数依赖。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("3NF（第三范式）：")])]),t._v(" "),_("p",[t._v("3NF在2NF的基础之上，消除了非主属性对于码的传递函数依赖。符合3NF要求的数据库设计，基本上解决了数据冗余过大、插入异常、修改异常、删除异常的问题。")])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("ul",[_("li",[t._v("1NF：属性不可再分")]),t._v(" "),_("li",[t._v("2NF：在1NF的基础之上，消除了非主属性对于码的部分函数依赖")]),t._v(" "),_("li",[t._v("3NF：在2NF的基础之上，消除了非主属性对于码的传递依赖")])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("函数依赖（functional dependency）")]),t._v(" ：若在一张表中，在属性（或属性组）X 的值确定的情况下，必定能确定属性 Y 的值，那么就可以说 Y 函数依赖于 X，写作 X → Y。")]),t._v(" "),_("li",[_("strong",[t._v("部分函数依赖（partial functional dependency）")]),t._v(" ：如果 X→Y，并且存在 X 的一个真子集 X0，使得 X0→Y，则称 Y 对 X 部分函数依赖。比如学生基本信息表 R 中（学号，身份证号，姓名）当然学号属性取值是唯一的，在 R 关系中，（学号，身份证号）->（姓名），（学号）->（姓名），（身份证号）->（姓名）；所以姓名部分函数依赖与（学号，身份证号）；")]),t._v(" "),_("li",[_("strong",[t._v("完全函数依赖(Full functional dependency)")]),t._v(" ：在一个关系中，若某个非主属性数据项依赖于全部关键字称之为完全函数依赖。比如学生基本信息表 R（学号，班级，姓名）假设不同的班级学号有相同的，班级内学号不能相同，在 R 关系中，（学号，班级）->（姓名），但是（学号）->(姓名)不成立，（班级）->(姓名)不成立，所以姓名完全函数依赖与（学号，班级）；")]),t._v(" "),_("li",[_("strong",[t._v("传递函数依赖")]),t._v(" ： 在关系模式 R(U)中，设 X，Y，Z 是 U 的不同的属性子集，如果 X 确定 Y、Y 确定 Z，且有 X 不包含 Y，Y 不确定 X，（X∪Y）∩Z=空集合，则称 Z 传递函数依赖(transitive functional dependency) 于 X。传递函数依赖会导致数据冗余和异常。传递函数依赖的 Y 和 Z 子集往往同属于某一个事物，因此可将其合并放到一个表中。比如在关系 R(学号 ,姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖。")])]),t._v(" "),_("h2",{attrs:{id:"什么是存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是存储过程"}},[t._v("#")]),t._v(" 什么是存储过程")]),t._v(" "),_("p",[t._v("可以把存储过程看成是一些SQL语句的集合，中间加了一些逻辑控制语句。")]),t._v(" "),_("p",[t._v("存储过程一旦调试完成通过后就能稳定运行，使用存储过程比单纯SQL语句执行要快，因为存储过程是预编译过的。")]),t._v(" "),_("p",[t._v("存储过程在互联网公司应用不多，因为存储过程难以调试和扩展，而且没有移植性，还会消耗数据库资源。")]),t._v(" "),_("h2",{attrs:{id:"drop-、delete、truncate-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#drop-、delete、truncate-有什么区别"}},[t._v("#")]),t._v(" drop 、delete、truncate 有什么区别？")]),t._v(" "),_("h3",{attrs:{id:"用法不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用法不同"}},[t._v("#")]),t._v(" 用法不同:")]),t._v(" "),_("ul",[_("li",[t._v("drop（丢弃数据）："),_("code",[t._v("drop table <表名>")]),t._v(" ，直接将表都删除掉，在删除表的时候使用。")]),t._v(" "),_("li",[t._v("truncate（清空数据）："),_("code",[t._v("truncate table <表名>")]),t._v("，只删除表中的数据，再插入数据的时候自增长id又从1开始，在清空表中数据时候使用。")]),t._v(" "),_("li",[t._v("delete（删除数据）："),_("code",[t._v("delete from <表名> where <列名> = 值")]),t._v("，删除某一列的数据，如果不加 where 子句和"),_("code",[t._v("truncate table 表名")]),t._v("作用类似。")])]),t._v(" "),_("p",[_("strong",[t._v("truncate 和不带 where 子句的 delete、以及 drop 都会删除表内的数据，但是 truncate 和 delete 只删除数据不删除表的结构(定义)，执行 drop 语句，此表的结构也会删除，也就是执行 drop 之后对应的表不复存在。")])]),t._v(" "),_("h3",{attrs:{id:"属于不同的数据库语言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属于不同的数据库语言"}},[t._v("#")]),t._v(" 属于不同的数据库语言")]),t._v(" "),_("p",[t._v("truncate 和 drop 属于DDL（数据定义语言）语句，操作立即生效，原数据不放到rollback segment 中，不能回滚，操作不触发trigger。")]),t._v(" "),_("p",[t._v("delete语句是DML（数据库操作语言）语句，这个操作会放到rollback segment中，事务提交后才会生效。")]),t._v(" "),_("p",[t._v("DML语句和DDL语句的区别：")]),t._v(" "),_("ul",[_("li",[t._v("DML是数据库操作语言（Data Manipulation Language）的缩写，是指对数据库中表记录的操作，主要包括表记录的插入（insert）、更新（update）、删除（delete）和查询（select）。")]),t._v(" "),_("li",[t._v("DDL（Data Definition Language）是数据定义语言的缩写，是对数据库内部的对象进行创建、删除、修改的操作语言。DML语言只是对表内部数据的操作，而不涉及表的定义、结构的修改，更不会涉及到其他对象。")])]),t._v(" "),_("h3",{attrs:{id:"执行速度不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行速度不同"}},[t._v("#")]),t._v(" 执行速度不同")]),t._v(" "),_("p",[t._v("drop > truncate > delete")]),t._v(" "),_("h2",{attrs:{id:"数据库设计一般分为几个步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计一般分为几个步骤"}},[t._v("#")]),t._v(" 数据库设计一般分为几个步骤")]),t._v(" "),_("p",[_("strong",[t._v("1.需求分析：")]),t._v(" 分析用户的需求，包括数据、功能和性能需求")]),t._v(" "),_("p",[_("strong",[t._v("2.概念结构设计：")]),t._v(" 主要采用E-R模型进行设计，包括画E-R图")]),t._v(" "),_("p",[_("strong",[t._v("3.逻辑结构设计：")]),t._v(" 通过将E-R图转换成表，实现从E-R模型到关系模型的转换")]),t._v(" "),_("p",[_("strong",[t._v("4.物理结构设计：")]),t._v(" 主要是为所设计的数据库选择合适的存储结构和存储路径")]),t._v(" "),_("p",[_("strong",[t._v("5.数据库实施：")]),t._v(" 包括编程、测试和试运行")]),t._v(" "),_("p",[_("strong",[t._v("6.数据库的运行和维护：")]),t._v(" 系统的运行与数据库的日常维护。")])])}),[],!1,null,null,null);v.default=r.exports}}]);