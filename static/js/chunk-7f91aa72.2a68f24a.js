(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f91aa72"],{"0d53":function(t,s,a){},"26dd1":function(t,s,a){},"452a":function(t,s,a){t.exports=a.p+"static/img/jfimg.207fbc5f.png"},4606:function(t,s,a){"use strict";var i=a("26dd1"),e=a.n(i);e.a},"57c6":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:t.chartOpt.id,staticClass:"echartsCon",attrs:{id:t.chartOpt.id}})},e=[],c=a("ca00"),n=[],r={name:"echartConent",props:{chartOpt:{type:Object,default:function(){return{id:"",theme:"",opts:{renderer:"svg"},options:{}}},require:!0},istrigger:!1},watch:{chartOpt:function(){this[this.chartOpt.id].clear(),this[this.chartOpt.id].setOption(this.chartOpt.options),this.$emit("mychartEvent",this[this.chartOpt.id])}},mounted:function(){var t=this;setTimeout((function(){t.initEcharts(t.chartOpt.id,t.chartOpt.options)}),100)},methods:{initEcharts:function(t,s){this.$refs[t]&&(this[t]=this.$echarts.init(this.$refs[t],this.chartOpt.theme,this.chartOpt.opts),this[t].setOption(s),this.$emit("getMychart",this[t]),n.push(this[t].resize),this.$store.commit("props/MuresizeArr",n),window.onresize=function(t){Object(c["b"])(n,(function(t){t()}))})}}},_=r,l=(a("4606"),a("0c7c")),o=Object(l["a"])(_,i,e,!1,null,"42c9b4de",null);s["a"]=o.exports},"68ec":function(t,s,a){t.exports=a.p+"static/img/bigger3.1d5f463b.png"},"7e07":function(t,s){t.exports="data:image/png;base64,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"},"852b":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAXCAYAAADpwXTaAAABtElEQVQ4jaXUS4iPURjH8c/fWFBk5zaJ3DYIK2WSlVtZYlZIiC1lwZ6NNNkg5bJRLtkJ2bCQsEDTTIlRJjaaxjVZSOnR86/T652/d8xT7+Wc8zvfc57LOa3WuSMmaMuxCvMn/ydnM7ZgLVajKzrHCzuKfVhYMzbSFLYEt7C0g+ZNE9hc9GPKP3SDkxrAztSAvuNjpe9J7Owg5qGFbxjCY7xL0YbKpId4jl2V/nsB25lZqdqFDPZrrMyxPpzFbcwo9AEfDjcPjeHeXuzBpWwfwOEELa5oT8UrYE9zdenmo0K0HzexDeczEVVQhONKGxZ2Mr/TErg9Uh1VjfcJvIsVNR70tn+6Wlt74vssV5+VK0c8TmQmf2RyhjEVi7LY+zMM99uwsjTWYSD/N2EZXuSEXzmpNxeck0m5U26xLNrP6Ua4+CVSjdP4hJ+F7ms+f1ld0d5IUNgavKyb2BRWWncDTWNYHJndGfgJwY5hJjbiAy5nJscNe4DjmJ3t6bnDocxuY9g1rO+wgYtloXaCxVW8owOobVfzwhwTFpdgHOKm9goLSnFZtFHZ1zHakBbxjLP79k8LvwHa2VAQZ3QFyQAAAABJRU5ErkJggg=="},a749:function(t,s,a){t.exports=a.p+"static/img/work6.b6f8eb8a.png"},aa88:function(t,s,a){t.exports=a.p+"static/img/work2.1beda4e3.png"},ad03:function(t,s,a){"use strict";var i=a("0d53"),e=a.n(i);e.a},b343:function(t,s,a){t.exports=a.p+"static/img/work1.5e4bc990.png"},e00d:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"todayWork_container"},[t._m(0),i("div",{staticClass:"choiceContract"},[t._m(1),i("a-dropdown",[i("a",{staticClass:"ant-dropdown-link",on:{click:function(t){return t.preventDefault()}}},[t._v(" 新木粮业有限公司2021年度玉米采购合同 "),i("a-icon",{attrs:{type:"down"}})],1),i("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[i("a-menu-item",[i("a",{attrs:{href:"javascript:;"}},[t._v("合同1")])]),i("a-menu-item",[i("a",{attrs:{href:"javascript:;"}},[t._v("合同2")])]),i("a-menu-item",[i("a",{attrs:{href:"javascript:;"}},[t._v("合同3")])])],1)],1),i("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 确定 ")]),i("a-button",{staticClass:"default_btn_top"},[t._v("上一个")]),i("a-button",{staticClass:"default_btn_down"},[t._v("下一个")])],1),i("div",{staticClass:"C_base_infor"},[i("div",{staticClass:"base_infor_fle"},[i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("合同基本信息")]),i("a-button",{staticClass:"details_btn"},[t._v("详情")])],1),t._m(2)]),i("div",{staticClass:"base_infor_fle"},[i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("预测信息")]),i("a-button",{staticClass:"details_btn"},[t._v("详情")])],1),t._m(3)])]),t._m(4),t._m(5),t._m(6),i("div",{staticClass:"early_warning"},[t._m(7),i("echart-com",{staticClass:"revenue_chart",attrs:{chartOpt:t.HeatmapOpt}})],1),t._m(8),i("div",{staticClass:"today_mission"},[i("div",{staticClass:"today_mission_left"},[i("div",{staticClass:"today_mission_titl"},[t._v("今日任务")]),i("a-table",{staticClass:"query_tablebox",attrs:{columns:t.columns,"data-source":t.data,pagination:!1,size:"small",rowKey:"key"},scopedSlots:t._u([{key:"count",fn:function(s){return i("div",{staticStyle:{color:"#EA9443"}},[t._v(t._s(s))])}},{key:"task",fn:function(t,s){return[s.count<=50?i("div",[i("span",{staticClass:"iconfont icon-cuohao"})]):i("div",[i("span",{staticClass:"iconfont icon-duihao"})])]}}])}),i("div",{staticClass:"left_bottom"},[t._m(9),i("div",{staticClass:"table_img_btnn"},[i("span",{staticClass:"table_img_jifen"},[t._v("获得总积分：")]),i("span",{staticClass:"table_img_num fontFB"},[t._v("5000分")]),i("a-button",{staticClass:"work_name_btntj"},[t._v("添加")]),i("a-button",{staticClass:"work_name_btnsc"},[t._v("删除")])],1)])],1),i("div",{staticClass:"today_mission_right"},[i("div",{staticClass:"today_mission_titr"},[t._v("计划任务详情")]),i("div",{staticClass:"work_name"},[i("div",{staticClass:"work_name_tit"},[i("span",{staticClass:"work_name_l"},[t._v("工作名称：")]),i("span",{staticClass:"work_name_t"},[t._v("化肥采购任务")]),i("a-button",{staticClass:"work_name_btn"},[t._v("详情")])],1),t._m(10)]),i("div",{staticClass:"work_done"},[i("div",{staticClass:"work_name_tit"},[i("span",{staticClass:"work_name_l"},[t._v("工作执行：")]),i("span",{staticClass:"work_name_t"},[t._v("化肥采购任务")]),i("a-button",{staticClass:"work_name_btn1"},[t._v("采购")]),i("a-button",{staticClass:"work_name_btn2"},[t._v("详情")])],1),t._m(11),t._m(12),t._m(13),t._m(14)])])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("选择合同")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("img",{staticClass:"choiceContract-circleimg",attrs:{src:a("e538a"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"base_infor_tab"},[a("div",{staticClass:"base_infor_tabgr"},[a("div",{staticClass:"infor_tabgr_desc"},[t._v("品种")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("等级")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("单价")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("发布时间")])]),a("div",{staticClass:"base_infor_tabwh"},[a("div",{staticClass:"infor_tabgr_desc"},[t._v("玉米")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("一等品")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("3880(元/吨)")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("2021-05-15")])]),a("div",{staticClass:"base_infor_tabgr"},[a("div",{staticClass:"infor_tabgr_desc"},[t._v("补贴")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("交货地")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("交易量")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("截止时间")])]),a("div",{staticClass:"base_infor_tabwh"},[a("div",{staticClass:"infor_tabgr_desc"},[t._v("国家补贴")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("吉林省")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("20（吨）")]),a("div",{staticClass:"infor_tabgr_desc"},[t._v("2021-08-08")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"forecast_infor"},[i("div",{staticClass:"forecast_infor_fl"},[i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("预测亩产量")]),i("div",{staticClass:"infor_KG"},[t._v("500KG-510KG")])]),i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("预测单价")]),i("div",{staticClass:"infor_KG"},[t._v("8.2￥-8.5￥")])]),i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("成本预测")]),i("div",{staticClass:"infor_KG"},[t._v("11000￥-14000￥")])])]),i("div",{staticClass:"forecast_infor_fl"},[i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("预测总产量")]),i("div",{staticClass:"infor_KG"},[t._v("2000KG-20100KG")])]),i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("预测总价")]),i("div",{staticClass:"infor_KG"},[t._v("16400￥-17200￥")])]),i("div",{staticClass:"infor_fl_cl"},[i("div",[t._v("净利润预测")]),i("div",{staticClass:"infor_KG"},[t._v("24000￥-28000￥")])])]),i("div",{staticClass:"forecast_integral"},[i("div",{staticClass:"forecast_integral_left"},[i("div",{staticClass:"integral_left_desczf"},[i("img",{staticClass:"integral_img",attrs:{src:a("7e07"),alt:""}}),i("div",{staticClass:"integral_imgposi"},[t._v("政府补贴")])]),i("div",{staticClass:"integral_left_descjf"},[i("img",{staticClass:"integral_img22",attrs:{src:a("452a"),alt:""}}),i("div",{staticClass:"integral_imgposi"},[t._v("获得积分")])])]),i("div",{staticClass:"forecast_integral_right"},[i("div",{staticClass:"integral_left_count"},[t._v("1.2万元")]),i("div",{staticClass:"integral_left_count"},[t._v("5000分")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("当前阶段")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"current_stage_outer"},[a("div",{staticClass:"current_stage"},[a("div",{staticClass:"current_stage_box"},[a("div",{staticClass:"stage_box_desc"},[t._v("发芽期")]),a("div",{staticClass:"stage_box_line"}),a("div",{staticClass:"stage_box_desc"},[t._v("已完成")])]),a("div",{staticClass:"current_stage_next"},[a("span",{staticClass:"iconfont icon-jiantou-copy-copy"})]),a("div",{staticClass:"current_stage_box"},[a("div",{staticClass:"stage_box_desc"},[t._v("幼苗期")]),a("div",{staticClass:"stage_box_line"}),a("div",{staticClass:"stage_box_desc"},[t._v("已完成")])]),a("div",{staticClass:"current_stage_next"},[a("span",{staticClass:"iconfont icon-jiantou-copy-copy"})]),a("div",{staticClass:"current_stage_box"},[a("div",{staticClass:"stage_box_desc"},[t._v("成苗期")]),a("div",{staticClass:"stage_box_line"}),a("div",{staticClass:"stage_box_desc"},[t._v("已完成")])]),a("div",{staticClass:"current_stage_next"},[a("span",{staticClass:"iconfont icon-jiantou-copy-copy"})]),a("div",{staticClass:"current_stage_box"},[a("div",{staticClass:"stage_box_desc"},[t._v("开花坐果期")]),a("div",{staticClass:"stage_box_line"}),a("div",{staticClass:"stage_box_desc"},[t._v("已完成")])]),a("div",{staticClass:"current_stage_next2"},[a("span",{staticClass:"iconfont icon-jiantou-copy-copy"})]),a("div",{staticClass:"current_stage_box2"},[a("div",{staticClass:"stage_box_desc2"},[t._v("结果期")]),a("div",{staticClass:"stage_box_line2"}),a("div",{staticClass:"stage_box_desc2"},[t._v("当前阶段")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle"},[a("span",{staticClass:"iconfont icon-wendu"})]),a("div",{staticClass:"stage_box_tem"},[t._v("19.5℃")]),a("div",{staticClass:"stage_box_air"},[t._v("空气温度")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle"},[a("span",{staticClass:"iconfont icon-shidu"})]),a("div",{staticClass:"stage_box_tem"},[t._v("71.7%")]),a("div",{staticClass:"stage_box_air"},[t._v("空气湿度")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle"},[a("span",{staticClass:"iconfont icon-co2"})]),a("div",{staticClass:"stage_box_tem"},[t._v("420ppm")]),a("div",{staticClass:"stage_box_air"},[t._v("二氧化碳")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle11"},[a("span",{staticClass:"iconfont icon-turangwendu"})]),a("div",{staticClass:"stage_box_tem11"},[t._v("17℃")]),a("div",{staticClass:"stage_box_air"},[t._v("土壤温度")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle11"},[a("span",{staticClass:"iconfont icon-turangshidu"})]),a("div",{staticClass:"stage_box_tem11"},[t._v("16%")]),a("div",{staticClass:"stage_box_air"},[t._v("土壤湿度")])]),a("div",{staticClass:"current_stage_box3"},[a("div",{staticClass:"stage_box_circle11"},[a("span",{staticClass:"iconfont icon-guangzhaoqiangdu"})]),a("div",{staticClass:"stage_box_tem11"},[t._v("1.65Lux")]),a("div",{staticClass:"stage_box_air"},[t._v("光照强度")])])]),a("div",{staticClass:"stage_result"},[t._v(" 结果期是生长发育最旺盛时期，要求大量同代产物，需要温度最高时期。此时要求白天适宜温度28℃-30℃，夜间16℃-18℃，利于果实成熟。 "),a("span",{staticClass:"iconfont icon-up-fill"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("预警情况")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"early_warning-theme"},[a("div",{staticClass:"warning-theme_square"}),a("div",{staticClass:"warning-theme_des"},[t._v("异常预警")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"query_title"},[i("img",{staticClass:"title_img",attrs:{src:a("852b"),alt:""}}),i("span",{staticClass:"title_desc"},[t._v("今日任务情况")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"table_img"},[i("img",{staticClass:"table_bigger2",attrs:{src:a("68ec"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"work_name_main"},[a("div",{staticClass:"name_main_fl"},[a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥名称：")]),a("span",[t._v("莲花生态菌肥、佐田氏复合肥")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("计划数量：")]),a("span",{staticClass:"fontFB"},[t._v("500KG")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("计划周期：")]),a("span",[t._v("15天")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("获得积分：")]),a("span",[t._v("50分")])])]),a("div",{staticClass:"name_main_fr"},[a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥种类：")]),a("span",[t._v("复合肥、水溶肥、氮肥")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥型号:")]),a("span",[t._v("XXXX")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("预估价格：")]),a("span",[t._v("XXXX-XXXX")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥名称：")]),a("span",[t._v("莲花生态菌肥、佐田氏复合肥、松地宝有机肥")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥种类：")]),a("span",[t._v("复合肥、水溶肥、有机肥")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"work_name_main"},[a("div",{staticClass:"name_main_fl"},[a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("采购数量：")]),a("span",{staticClass:"fontFB"},[t._v("550KG")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("采购周期：")]),a("span",[t._v("10天")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("获得积分：")]),a("span",[t._v("50分")])])]),a("div",{staticClass:"name_main_fr"},[a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("化肥型号：")]),a("span",[t._v("XXXX")])]),a("div",{staticClass:"name_main_fl_des"},[a("span",[t._v("采购价格：")]),a("span",[t._v("35000元")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"work_done_img"},[i("div",{staticClass:"work_done_imgcon"},[i("img",{staticClass:"imgcon_ss",attrs:{src:a("aa88"),alt:""}}),i("div",{staticClass:"imgcon_cc"},[t._v("莲花生态菌肥")])]),i("div",{staticClass:"work_done_imgcon"},[i("img",{staticClass:"imgcon_ss",attrs:{src:a("b343"),alt:""}}),i("div",{staticClass:"imgcon_cc"},[t._v("佐田氏复合肥")])]),i("div",{staticClass:"work_done_imgcon"},[i("img",{staticClass:"imgcon_ss",attrs:{src:a("a749"),alt:""}}),i("div",{staticClass:"imgcon_cc"},[t._v("莲花松地宝有机肥")])])])}],c=a("57c6"),n=(a("d81d"),["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"]),r=["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday"],_=[[0,0,5],[0,6,0],[0,13,1],[0,17,6],[0,23,5],[1,3,0],[1,9,0],[1,22,7],[2,2,0],[2,8,0],[2,10,3],[2,17,5],[2,20,7],[3,1,3],[3,6,0],[4,9,2],[4,13,4],[4,17,1],[4,23,0],[5,3,3],[5,7,0],[6,15,4]],l=function(){return _=_.map((function(t){return[t[1],t[0],t[2]||"-"]})),{tooltip:{position:"top"},animation:!1,grid:{height:"80%",y:"5%"},visualMap:{show:!1,min:0,max:100,calculable:!0,orient:"horizontal",left:"center",top:"top",inRange:{color:["#239A3B"]}},xAxis:{type:"category",data:n,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitArea:{show:!0}},yAxis:{type:"category",data:r,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitArea:{show:!0,color:"#fff"}},series:[{name:"Punch Card",type:"heatmap",data:_,label:{show:!0,color:"#222",normal:{show:!1}}}]}},o={name:"todaywork",components:{echartCom:c["a"]},data:function(){return{HeatmapOpt:{id:"HeatmapOpt_id",options:l()},columns:[{title:"任务名称",dataIndex:"taskName",key:"taskName",align:"center"},{title:"开始时间",dataIndex:"begainTime",key:"begainTime",align:"center"},{title:"结束时间",dataIndex:"endTime",key:"endTime",align:"center"},{title:"是否合同要求",dataIndex:"request",key:"request",align:"center"},{title:"获得积分",dataIndex:"count",key:"count",align:"center",scopedSlots:{customRender:"count"}},{title:"是否完成任务",dataIndex:"task",key:"task",align:"center",scopedSlots:{customRender:"task"}}],data:[{key:1,taskName:"采购计划",begainTime:"2021-05-06",endTime:"2021-06-06",request:"是",count:500},{key:2,taskName:"化肥采购任务",begainTime:"2021-05-06",endTime:"2021-05-13",request:"是",count:100},{key:3,taskName:"化肥采购任务一",begainTime:"2021-05-06",endTime:"2021-05-10",request:"是",count:50},{key:4,taskName:"化肥采购任务二",begainTime:"2021-05-10",endTime:"2021-05-13",request:"是",count:50},{key:5,taskName:"种子采购任务",begainTime:"2021-05-6",endTime:"2021-05-16",request:"是",count:60},{key:6,taskName:"灌溉设备采购任务",begainTime:"2021-05-10",endTime:"2021-05-15",request:"是",count:40},{key:7,taskName:"农药采购任务",begainTime:"2021-05-11",endTime:"2021-05-18",request:"是",count:100},{key:8,taskName:"农机采购任务",begainTime:"2021-05-12",endTime:"2021-05-22",request:"是",count:150},{key:9,taskName:"农具采购任务",begainTime:"2021-05-15",endTime:"2021-06-1",request:"是",count:50}]}}},d=o,v=(a("ad03"),a("0c7c")),C=Object(v["a"])(d,i,e,!1,null,"8876e0fe",null);s["default"]=C.exports},e538a:function(t,s){t.exports="data:image/png;base64,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"}}]);