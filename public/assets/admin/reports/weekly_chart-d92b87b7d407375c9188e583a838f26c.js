var Hadean=window.Hadean||{};"undefined"==typeof Hadean.Admin&&(Hadean.Admin={});var dataSet=null;"undefined"==typeof Hadean.Admin.weeklySalesChart&&(Hadean.Admin.weeklySalesChart={initialize:function(){jQuery.ajax({type:"GET",url:"/admin/reports/weekly_charts/",success:function(e){Hadean.Admin.weeklySalesChart.createSalesGraph(e),Hadean.Admin.weeklySalesChart.createEarningsGraph(e)},dataType:"json"})},createSalesGraph:function(e){new Morris.Bar({element:"weekly-sales-graph",data:e,xkey:"date",ykeys:["sales"],labels:["Sales"]})},createEarningsGraph:function(e){new Morris.Line({element:"weekly-earnings-graph",data:e,xkey:"date",ykeys:["amount"],labels:["Earnings"]})}},jQuery(function(){Hadean.Admin.weeklySalesChart.initialize()}));