// For all regular function calls, this points to window object or gobal object 

var user = {
    firstname: "Athavra",
    courseCount: "3",
    getCourseCount: function () {
        console.log("line 7",this);
    }
}

user.getCourseCount() //This is not called a regular function call