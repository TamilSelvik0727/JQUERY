/**
 * 
 */

$(document).ready(
	function() {
		$("#b1").click(
			function() {
				$("p").css("color", "red");
			}
		);

		$("#b2").click(
			function() {
				$("p").css("color", "blue");
			}
		);
		$("#b3").click(
			function() {
				$("p").css("color", "green");
			}
		);

	}
);