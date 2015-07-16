Template.appStudProfile.helpers({
		messages: function () {

			return Messages.find({}, {sort: {createdAt: -1}, limit: 10}) 
		}
});


Template.appStudProfile.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},

	"keyup .txtCourse": function (event) {
		if(event.keyCode == 13){
			Messages.insert({
				Fname: $(".txtFName").val(),
				Lname: $(".txtLName").val(),
				Mname: $(".txtMName").val(),
				Course: $(".txtCourse").val(),
				createdAt: new Date()


			});
			
			$(".txtFName").val("");
			$(".txtFName").focus();
			$(".txtLName").val("");
			$(".txtLName").focus();
			$(".txtMName").val("");
			$(".txtMName").focus();
			$(".txtCourse").val("");
			$(".txtCourse").focus();

		}
		return false;
	}


});