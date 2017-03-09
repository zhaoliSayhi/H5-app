/*  H5ComponentPoint对象（散点图表组件对象） */

var H5ComponentPoint = function (name, config) {
	var component = new H5ComponentBase(name, config);
	// 基于第一项的数据
	var based = config.data[0][1];

	$.each(config.data, function(index, item) {
		var point = $('<div class="point point_'+index+'">');

		var name = $('<div class="name">'+item[0]+'</div>');
		var rate = $('<div class="per">'+(item[1]*100)+'%</div>');
		point.append(name);
		name.append(rate);

		var per = (item[1]/based*100) + '%';
		point.width(per).height(per);
		if (item[2]) {
			point.css('backgroundColor', item[2]);
		}
		if (item[3]!== undefined && item[4]!== undefined) {
			point.css({left: item[3], top: item[4]});
		}
		component.append(point);
	})

	return component;
}

