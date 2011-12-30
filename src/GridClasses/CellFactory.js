﻿kg.CellFactory = function (cols) {
    var colCache = cols,
        len = colCache.length;

    this.buildRowCells = function (row) {
        var cell,
            cells = [],
            col,
            i = 0;

        for (; i < len; i++) {
            col = colCache[i];

            cell = new kg.Cell();
            cell.column = col;
            cell.row = row;
            cell.data(row.entity()[col.field]);
            cell.width(col.width());
            cell.offsetLeft(col.offsetLeft);

            cells.push(cell);

        }
        row.cells(cells);
        return row;
    };
};