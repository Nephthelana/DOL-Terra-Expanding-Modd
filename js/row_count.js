function bestiaryInfo (arr, element, parentId, childId) {
	if (T.lastInsertedRow) {
		T.lastInsertedRow.remove();
		delete T.lastInsertedRow;
		if (T.lastInserted !== element) {
			addNewRow(arr, element, parentId, childId);
		}
	} else {
		addNewRow(arr, element, parentId, childId);
	}
}
window.bestiaryInfo = bestiaryInfo;

function addNewRow (arr, element, parentId, childId) {
	//计算点击元素所在的行row，以及当前表格列数columnCount，得到该行的最后一位元素位置nextRowPosition
	for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            var index=i;
        }
    }
	const parentWidth = document.getElementById(parentId).getBoundingClientRect().width;
	const parentGap = parseInt(window.getComputedStyle(document.getElementById(parentId)).getPropertyValue('gap')) * V.options.zoom / 100;
	const childWidth = document.getElementById(childId).getBoundingClientRect().width;
	const columnCount = Math.floor(((parentWidth - 8 * 2) - childWidth) / (parentGap + childWidth) + 1);//计算当前表格列数。固定padding为8，gap为5
	const row = Math.floor(index / columnCount) + 1;
	const nextRowPosition = row * columnCount;
	//在nextRowPosition后插入新行newRow
	const newRow = document.createElement('div');//定义新行为div
	newRow.classList.add('new-row');//newRow的css样式使用.new-row
	const parentEle = document.getElementById(parentId);//读取对应父级元素
	parentEle.insertBefore(newRow, parentEle.children[nextRowPosition]);//在对应父级元素的nextRowPosition位置插入新行
	var bestiaryInfoTemp = document.getElementById('bestiaryInfoTemp');//获取在页面底部临时生成图鉴信息的，id为bestiaryInfoTemp的元素
	newRow.appendChild(bestiaryInfoTemp);//将临时生成的元素转移到插入的新行中作为图鉴信息的显示
	T.lastInserted = element;// 更新最后选择的元素
	T.lastInsertedRow = newRow;// 更新最后插入的行内容
}
window.addNewRow = addNewRow;