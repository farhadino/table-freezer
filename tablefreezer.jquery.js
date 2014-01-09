// .. as a jquery plugin

define([ "jquery" ], function($) {

	function createTableRowFloater(strSelect) {

	}

	function initializeTable(strTableSelected, topOffset) {
    $(strSelectTable).each(function() {
      $(this).wrap("<div class=\"divFrozen\" style=\"position:relative\"></div>");
      var rowSelector = "tr:nth-child(1)";
      var selectedRow = $(selectedRow, this).first();
      var clonedRow = selectedRow.clone()
      selectedRow.before(clonedRow);
    }
	}

}
