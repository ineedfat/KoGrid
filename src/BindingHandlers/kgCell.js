﻿/// <reference path="../../lib/knockout-2.0.0.debug.js" />
/// <reference path="../../lib/jquery-1.7.js" />
/// <reference path="../namespace.js" />
/// <reference path="../../lib/knockout-latest.debug.js" />

ko.bindingHandlers['kgCell'] = (function () {
    var makeValueAccessor = function (cell) {
        if (cell.column.field === 'rowIndex') {
            return function() { return cell.row.rowDisplayIndex; };
        } else {
            return function() { return cell.data; };
        }
    };

    return {
        'init': function () {
        },
        'update': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var options = valueAccessor(),
                cell,
                row = bindingContext.$data;

            //get the cell from the options
            cell = row.cellMap[options.value];
            if (cell == undefined) return;
            //ensure the cell has the right class so it lines up correctly
            element.className += " kgCell " + "col" + cell.column.index + " ";
            if (cell.column.field !== '__kg_selected__' && !cell.column.hasCellTemplate) {
                ko.bindingHandlers.text.update(element, makeValueAccessor(cell));
            }
        }
    };
} ());